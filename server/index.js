const express = require('express');
const app = express();
const PORT = 3000;
const userController = require('./controllers/users');

app.use(express.json());

//this is basically how we use our client-side built to serve those files
app.use(express.static(__dirname + "/dist"))

// horrible CORS config so we dont get errors. this is Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  next();
})

// this function is async, so code below it will be executed before this gets executed
// err means there was an error from the async, data is the return data
app.listen(PORT, (err, data) => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res, next) => {
  res.send('Hello World!');
})
  .use("/api/v1/users", userController)

    // catch all
   .get("*", (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html");
  })

