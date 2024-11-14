const userModel = require('../model/users.js')

const express = require('express')
const app = express.Router()

// our JSON user data
const data = userModel.getAll().data;


app.get('/', (req, res) => {
    res.send(data)
})
    .get('/:id', (req, res) => {
        const user = data.find(item => item.userId === parseInt(req.params.id))
        if (user) {
            res.send(user)
        } else {
            res.status(404).send('User not found')
        }
    })
    .post('/', (req, res) => {
        const user = {...req.body, id: data.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1 }
        data.push(user)
        res.send(user)
    })
    .patch('/:id', (req, res) => {
        const userIndex = data.findIndex(item => item.userId === parseInt(req.params.id))
        if (userIndex === -1) {
            res.status(404).send('User not found')
        } else {
            const updatedUser = {...data[userIndex],...req.body }
            data[userIndex] = updatedUser
            res.send(updatedUser)
        }
    })
    .delete('/:id', (req, res) => {
        const userIndex = data.findIndex(item => item.userId === parseInt(req.params.id))
        if (userIndex === -1) {
            res.status(404).send('User not found')
        } else {
            data.splice(userIndex, 1)
            res.send(data)
        }
    })

module.exports = app