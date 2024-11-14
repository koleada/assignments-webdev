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


function getAll(){
    return {
        data: data.users,
        total: data.users.length
    }
}

function getUserById(id){
    return data.users.find(user => user.userId === id)
}

function add(user){
    // fix this
   data.users.push(user)
    return user
}

function remove(user){

}

module.exports = {getAll, getUserById, add}