import express from "express";
import apiRoutes from "./api/index.js";

const appAPI = express.Router();

appAPI.use("/api", apiRoutes);

appAPI.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

export default appAPI;
