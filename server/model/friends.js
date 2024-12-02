// @ts-nocheck
const express = require("express");
const app = express.Router();
const db = require("./supabase");

const conn = db.getConnection();

/**
 * @typedef {import("../../client/src/models/friends").Friend} Friend
 */
/**
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @template T
 */

/**
 * Get all friend relationships
 * @returns {Promise<DataListEnvelope<Friend>>}
 */
async function getAll() {
    const { data, error, count } = await conn
        .from("Friends")
        .select("*", { count: "estimated" });

    return {
        isSuccess: true,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get all of a specified user's friends
 * @param {number} userId
 * @returns {Promise<DataListEnvelope<Friend>>}
 */
async function getFriends(userId) {
    const { data, error, count } = await conn
        .from("Friends")
        .select("*", { count: "estimated" })
        .eq("userId", userId);

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "No friends found for userId: " + id,
            data: [],
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get friend for specified id
 * @param {number} id
 * @returns {Promise<DataListEnvelope<Friend>>}
 */
async function getFriendById(id) {
    const { data, error, count } = await conn
        .from("Friends")
        .select("*")
        .eq("id", id)
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "No friend found for id: " + id,
            data: [],
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Get friend id for userId and friendUserId
 * @param {number} userId
 * * @param {number} friendUserId
 * @returns {Promise<DataListEnvelope<Friend>>}
 */
async function getFriendId(userId, friendUserId) {
    const { data, error, count } = await conn
        .from("Friends")
        .select("*")
        .eq("userId", userId)
        .eq("friendUserId", friendUserId)
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "No friend found for id: " + id,
            data: [],
            status: 404,
        };
    }
    return {
        isSuccess: !error,
        message: error?.message,
        data: data,
        total: count,
    };
}

/**
 * Add a new friend
 * @param {Friend} friend
 * @returns {Promise<DataEnvelope<Friend>>}
 */
async function add(friend) {
    const { data, error } = await conn
        .from("Friends")
        .insert([
            {
                userId: friend.userId,
                friendUserId: friend.friendUserId,
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
 * Remove a friend
 * @param {number} id
 * @returns {Promise<DataEnvelope<Friend>>}
 */
async function remove(id) {
    const { data, error } = await conn
        .from("Friends")
        .delete()
        .eq("id", id)
        .select("*")
        .single();

    if (error && !data) {
        throw {
            isSuccess: false,
            message: "Friend not found",
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
module.exports = {
    getAll,
    getFriends,
    add,
    remove,
    getFriendById,
    getFriendId,
};
