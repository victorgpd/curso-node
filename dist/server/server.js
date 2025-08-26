import "dotenv/config";
import express from "express";
import { router } from "../routes/index.js";
const server = express();
server.use(express.json());
server.use("/api/v1", router);
export { server };
