const express = require('express');
const app = express();
const PORT = 3000;
const userController = require('./controllers/users');

app.use(express.json());
app.use(express.static(__dirname + "/dist"))

// this function is async, so code below it will be executed before this gets executed
// err means there was an error from the async, data is the return data
app.listen(PORT, (err, data) => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res, next) => {
  res.send('Hello World!');
})
  .use("/api/v1/users", userController)

  //catch all very useful
  .get("*", (req, res, next) => {
    res.sendFile(__dirname + "/dist/index.html");
  })

