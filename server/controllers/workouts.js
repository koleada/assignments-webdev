const model = require("../model/workouts.js");
const express = require("express");
const app = express.Router();
const authenticateJWT = require("../model/auth.js");

app.get("/", (req, res, next) => {
    model
        .getAll()
        .then((x) => res.send(x))
        .catch(next);
})
    .get("/:id", (req, res, next) => {
        const id = req.params.id;
        model
            .getWorkoutById(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .get("/user-workouts/:id", (req, res, next) => {
        const id = req.params.id;
        model
            .getWorkoutsByUserId(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .post("/", authenticateJWT, (req, res, next) => {
        model
            .add(req.body)
            .then((x) => res.send(x))
            .catch(next);
    })
    // .post("/seed", (req, res, next) => {
    //     model
    //         .seed()
    //         .then((x) => res.send(x))
    //         .catch(next);
    // })
    .patch("/:id", authenticateJWT, (req, res, next) => {
        const id = req.params.id;
        model
            .update(+id, req.body)
            .then((x) => res.send(x))
            .catch(next);
    })
    .put("/:id", authenticateJWT, (req, res, next) => {
        const id = req.params.id;
        model
            .update(+id, req.body)
            .then((x) => res.send(x))
            .catch(next);
    })
    .delete("/:id", authenticateJWT, (req, res, next) => {
        const id = req.params.id;
        model
            .remove(+id)
            .then((x) => res.send(x))
            .catch(next);
    });

module.exports = app;
