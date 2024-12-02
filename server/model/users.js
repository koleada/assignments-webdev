const express = require("express");
const app = express.Router();
const data = require("../data/users.json");
const bcrypt = require("bcrypt");
const db = require("./supabase");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;

const conn = db.getConnection();

/**
 * @typedef {import("../../client/src/models/users").User} User
 */

/**
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @template T
 */
//basically replace functionality in /controllers/users.js with different function calls in this file

// function to insert our JSON data into supabase
async function seed() {
    for (const user of data.users) {
        await add(user);
    }
}

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<User>>}
 */
async function getAll() {
    // get all users from supabase db (where users is our table name):
    const { data, error, count } = await conn
        .from("Users")
        .select("*", { count: "estimated" });

    return {
        isSuccess: true,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function getUserById(id) {
    const { data, error } = await conn
        .from("Users")
        .select("*")
        .eq("userId", id)
        .single();

    if (error || !data) {
        throw {
            isSuccess: false,
            message: "User not found for id: " + id,
            data: null,
            status: 404,
        };
    }

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Gives only public data for specified userId
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function getFriendByUserId(id) {
    const { data, error } = await conn
        .from("Users")
        .select("userId, name, username, profileImageUrl")
        .eq("userId", id)
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "User data not found for id: " + id,
            data: null,
            status: 404,
        };
    }

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Get friend by name or username
 * @param {string} input
 * @returns {Promise<DataEnvelope<User>>}
 */
async function getFriendByName(input) {
    const { data, error } = await conn
        .from("Users")
        .select("userId, profileImageUrl, name, username")
        .or(`name.ilike.%${input}%,username.ilike.%${input}%`);

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "User data not found for supplied input",
            data: null,
            status: 404,
        };
    }

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Add a new user
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function add(user) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    const { data, error } = await conn
        .from("Users")
        .insert([
            {
                name: user.name,
                username: user.username,
                password: hashedPassword,
                email: user.email,
                profileImageUrl: user.profileImageUrl,
            },
        ])
        .select("*")
        .single();

    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
    };
}

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function update(id, user) {
    if (user.password) {
        // dont need this now since we will only be reciving plain text passwords when doing updates

        //const bcryptHashRegex = /^\$2[aby]?\$[\d]{2}\$[./A-Za-z0-9]{53}$/;
        //const isHashed = bcryptHashRegex.test(user.password);

        // let passwordToStore;

        // if (isHashed) {
        //     // Password is already hashed
        //     passwordToStore = user.password;
        // } else {
        //     const saltRounds = 10;
        //     passwordToStore = await bcrypt.hash(user.password, saltRounds);
        // }
        const saltRounds = 10;
        const passwordToStore = await bcrypt.hash(user.password, saltRounds);
        const { data, error } = await conn
            .from("Users")
            .update([
                {
                    name: user.name,
                    username: user.username,
                    password: passwordToStore,
                    email: user.email,
                    profileImageUrl: user.profileImageUrl,
                },
            ])
            .eq("userId", id)
            .select("*")
            .single();
        if (error && !data) {
            throw {
                isSuccess: false,
                message: "User not found for id: " + id,
                data: null,
                status: 404,
            };
        }

        return {
            isSuccess: !error,
            data: data,
        };
    } else {
        const { data, error } = await conn
            .from("Users")
            .update([
                {
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    profileImageUrl: user.profileImageUrl,
                },
            ])
            .eq("userId", id)
            .select("*")
            .single();

        if (error && !data) {
            throw {
                isSuccess: false,
                message: "User not found for id: " + id,
                data: null,
                status: 404,
            };
        }

        return {
            isSuccess: !error,
            data: data,
        };
    }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("Users")
        .delete()
        .eq("userId", id)
        .select("*")
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "User not found for id: " + id,
            data: null,
            status: 404,
        };
    }

    return {
        isSuccess: !error,
        data: data,
    };
}

async function login(email, password) {
    const { data: user, error } = await conn
        .from("Users")
        .select("*")
        .eq("email", email)
        .single();

    if (error || !user) {
        return {
            isSuccess: false,
            message: "Invalid email or password. Please Try again",
        };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return {
            isSuccess: false,
            message: "Invalid email or password. Please Try again",
        };
    }

    const token = jwt.sign(
        {
            userId: user.userId,
            username: user.username,
            created_at: user.created_at,
        },
        SECRET_KEY,
        { expiresIn: "3h" }
    );

    delete user.password;
    return {
        isSuccess: !error,
        data: user,
        token: token,
    };
}

module.exports = {
    getAll,
    getUserById,
    add,
    update,
    remove,
    login,
    seed,
    getFriendByUserId,
    getFriendByName,
};
