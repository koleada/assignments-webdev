const express = require("express");
const app = express();
const PORT = 3000;
const userController = require("./controllers/users");
const workoutController = require("./controllers/workouts");
const friendController = require("./controllers/friends");
const cors = require("cors");
const helmet = require("helmet");

app.use(express.json());

//this is basically how we use our client-side built to serve those files
app.use(express.static(__dirname + "/dist"));

// bad CORS config so we dont get errors. this is Middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Allow-Methods", "*");
//     next();
// });

app.use(cors());
const allowedOrigins = [
    "http://127.0.0.1:5173", // Local dev server
    "https://final-project-6uo1.onrender.com", // Render.com domain
    "http://127.0.0.1:3000",
];

const corsConfig = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsConfig));

//iframe protection
app.use(helmet.frameguard());

// this function is async, so code below it will be executed before this gets executed
// err means there was an error from the async, data is the return data
app.listen(PORT, (err, data) => {
    console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res, next) => {
    res.send("Hello World!");
})
    .use("/api/v1/users", userController)
    .use("/api/v1/workouts", workoutController)
    .use("/api/v1/friends", friendController)

    // catch all
    .get("*", (req, res, next) => {
        res.sendFile(__dirname + "/dist/index.html");
    });

// error handling middleware
app.use((err, req, res, next) => {
    // Set default error status and message
    const status = err.status || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({
        isSuccess: false,
        message,
        data: err.data || null,
        status, // Include status for debugging purposes
    });
});
