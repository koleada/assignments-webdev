const express = require('express')
const app = express.Router()
const mode = require('../model/users.js')

app.get('/', (req, res) => {
    res.send(data.items)
})
    .get('/:id', (req, res) => {
        const user = data.items.find(item => item.id === parseInt(req.params.id))
        if (user) {
            res.send(user)
        } else {
            res.status(404).send('User not found')
        }
    })
    .post('/', (req, res) => {
        const user = {...req.body, id: data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1 }
        data.items.push(user)
        res.send(user)
    })
    .patch('/:id', (req, res) => {
        const userIndex = data.items.findIndex(item => item.id === parseInt(req.params.id))
        if (userIndex === -1) {
            res.status(404).send('User not found')
        } else {
            const updatedUser = {...data.items[userIndex],...req.body }
            data.items[userIndex] = updatedUser
            res.send(updatedUser)
        }
    })
    .delete('/:id', (req, res) => {
        const userIndex = data.items.findIndex(item => item.id === parseInt(req.params.id))
        if (userIndex === -1) {
            res.status(404).send('User not found')
        } else {
            data.items.splice(userIndex, 1)
            res.send(data.items)
        }
    })

module.exports = app  