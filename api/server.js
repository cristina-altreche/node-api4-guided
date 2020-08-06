const express = require("express");
const helmet = require("helmet");

const apiRouter = require("./api-router.js");

const server = express();

server.use(helmet());

server.use("/api", apiRouter);

server.get("/", (req, res) => {
    const message= process.env.MESSAGE || "hello from code"
  res.status(200).json({message, database: process.env.DB_NAME});
});

module.exports = server;
