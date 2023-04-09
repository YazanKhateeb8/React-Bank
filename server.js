const express = require("express");
const app = express();

const mongoose = require("mongoose");
const transactionApi = require("./server/routes/api");


mongoose.connect("mongodb://127.0.0.1:27017/bankDB", {
    useNewUrlParser: true,
  })
  .catch((err) => console.log(err));

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
      next()
  })

app.use("/", transactionApi);



const port = 4000;
app.listen(port, function () {
  console.log(`Running on port http://localhost:${port}`);
});
