const model = require("../model/users.js");
const express = require("express");
const authenticateJWT = require("../model/auth.js");
const app = express.Router();

app.get("/", authenticateJWT, (req, res, next) => {
    model
        .getAll()
        .then((x) => res.send(x))
        .catch(next);
})
    .get("/:id", authenticateJWT, (req, res, next) => {
        const id = req.params.id;
        model
            .getUserById(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .get("/friends/:id", (req, res, next) => {
        const id = req.params.id;
        model
            .getFriendByUserId(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .post("/", (req, res, next) => {
        model
            .add(req.body)
            .then((x) => res.send(x))
            .catch(next);
    })
    .post("/friends/name", (req, res, next) => {
        model
            .getFriendByName(req.body.name)
            .then((x) => res.send(x))
            .catch(next);
    })
    .post("/login", (req, res, next) => {
        model
            .login(req.body.email, req.body.password)
            .then((x) => res.send(x))
            .catch(next);
    })
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
// .post("/seed", (req, res, next) => {
//     model
//         .seed()
//         .then(() => res.send())
//         .catch(next);
// });

module.exports = app;
