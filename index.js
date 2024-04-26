import express from "express";
// const express = require("express");
import "dotenv/config";
// require("dotenv").config();

const portNumber = process.env.PORT_NUMBER;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, yes, what do you want?");
});

app.listen(portNumber, () => console.log(`listening on port ${portNumber}`));
