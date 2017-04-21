import config from "./config";

import apiRouter from "./api";

import express from "express";
const server = express();

server.get("/", (req, res) => {
  res.send("Hello from Express \n");
});

server.use("/api", apiRouter);

server.listen(config.port, () => {
  console.info("express listening on port ", config.port);
});