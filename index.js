import express from "express";
// const express = require("express");
// import "dotenv/config";

// require("dotenv").config();
// dotenv would be required before node v20
// .env files are now supported.

const portNumber = process.env.PORT_NUMBER;

const app = express();

app.use(express.json());
// Basically telling express to use a middleware that parses all incoming requests to JSON

app.get("/", function (_, res) {
  res.send("Hello! Yes, we're doing well!");
});

app.get("/read-body", function (req, res) {
  // Example of how to read the body of a request.
  // http://localhost:8000/read-body with a body of:
  // { "val": "hi" } returns 'hi'.
  const { body } = req;
  console.log("body:", body);
  res.send(body.val);
});

app.get("/read-params/:val", (req, res) => {
  // Example of how to read param.
  // http://localhost:8000/read-params/hello
  // with this body: { "val": "hello" }
  // Would return "hello"
  const { params } = req;
  console.log("params:", params);
  res.send(params.val);
});

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`));
