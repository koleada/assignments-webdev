const express = require('express')
const app = express.Router()
const data = require('../data/users.json')

/**
 * @typedef {import("../../client/src/models/users").User} User
 */
    
/**
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @template T
 */ 
//basically replace functionality in /controllers/users.js with different function calls in this file


/**
 * Get all users
 * @returns {Promise<DataListEnvelope<User>>}
 */
async function getAll(){
    return {
        data: data.users,
        total: data.users.length
    }
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function getUserById(id){
    const user =  data.users.find(user => user.userId === id);
    
    if (!user) throw {
        isSuccess: false,
        message: "User not found",
        data: id,
        status: 404,
    }
    else return {
        isSuccess: true,
        data: user,
    }
}

/**
 * Add a new user
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function add(user){
    user.userId = data.users.reduce((prev, x) => (x.userId > prev ? x.userId : prev), 0) + 1
    data.users.push(user)
    return {
        isSuccess: true,
        data: user,
    }
}

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function update(id, user) {
    const userToUpdate =  data.users.find(user => user.userId === id);
    if (!userToUpdate) throw {
        isSuccess: false,
        message: "User not found",
        data: id,
        status: 404,
    }
    else {
        Object.assign(userToUpdate, user)
        return {
            isSuccess: true,
            data: userToUpdate,
        }
    }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<number>>}
 */
async function remove(id) {
    const userIndex = data.users.findIndex((user) => user.userId == id)
    if (userIndex === -1)
        throw {
            isSuccess: false,
            message: "User not found",
            data: id,
            status: 404,
        }
    data.users.splice(userIndex, 1)
    return { isSuccess: true, message: "User deleted", data: id }
}

async function login(email, password){
    const user = data.users.find(user => user.email === email && user.password === password);
    if(user){
        return user;
    }
    return false;
}

module.exports = {getAll, getUserById, add, update, remove, login}