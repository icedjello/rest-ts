import express from "express";
// const express = require("express");
// import "dotenv/config";

// require("dotenv").config();
// dotenv would be required before node v20
// .env files are now supported.

const portNumber = process.env.PORT_NUMBER;

const app = express();

app.use(express.json());
// Basically telling express to turn

app.get("/", function (_, res) {
  res.send("Hello! Yes, we're doing well!");
});

app.get("/read-body", function (req, res) {
  // Example of how to read the body of a request.
  // http://localhost:8000/read-body with a body of:
  // { "good": "thing" } returns the same thing.
  const { body } = req;
  console.log("body:", body);
  res.send(body);
});

app.get("/read-params/:val", (req, res) => {
  // Example of how to read param.
  // http://localhost:8000/read-params/hello
  // Would return { "val": "hello" }
  const { params } = req;
  console.log("yep", params);
  res.send(params);
});

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`));
