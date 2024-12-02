const model = require("../model/friends.js");
const express = require("express");
const app = express.Router();
const authenticateJWT = require("../model/auth.js");

app.get("/", authenticateJWT, (req, res, next) => {
    model
        .getAll()
        .then((x) => res.send(x))
        .catch(next);
})
    .get("/getFriends/:userId", authenticateJWT, (req, res, next) => {
        const id = req.params.userId;
        model
            .getFriends(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .get(
        "/getFriendId/:userId/:friendUserId",
        authenticateJWT,
        (req, res, next) => {
            const userId = Number(req.params.userId);
            const friendUserId = Number(req.params.friendUserId);
            model
                .getFriendId(+userId, +friendUserId)
                .then((x) => res.send(x))
                .catch(next);
        }
    )
    .get("/:id", authenticateJWT, (req, res, next) => {
        const id = req.params.id;
        model
            .getFriendById(+id)
            .then((x) => res.send(x))
            .catch(next);
    })
    .post("/", authenticateJWT, (req, res, next) => {
        model
            .add(req.body)
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
