const model = require('../model/workouts.js')
const express = require('express')
const app = express.Router()



app.get("/", (req, res, next) => {
    model
        .getAll()
        .then((x) => res.send(x))
        .catch(next)
})
    .get("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .getWorkoutById(+id)
            .then((x) => res.send(x))
            .catch(next)
    })
    .get("/user-workouts/:id", (req, res, next) => {
        const id = req.params.id
        model
            .getWorkoutsByUserId(+id)
            .then((x) => res.send(x))
            .catch(next)
    })
    .post("/", (req, res, next) => {
        model
            .add(req.body)
            .then((x) => res.send(x))
            .catch(next)
    })
    .patch("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .update(+id, req.body)
            .then((x) => res.send(x))
            .catch(next)
    })
    .put("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .update(+id, req.body)
            .then((x) => res.send(x))
            .catch(next)
    })
    .delete("/:id", (req, res, next) => {
        const id = req.params.id
        model
            .remove(+id)
            .then((x) => res.send(x))
            .catch(next)
    })

module.exports = app