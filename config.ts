import express from "express";
import dotEnv from "dotenv";
import bodyParser from "body-parser";

dotEnv.config({ path: "./.env" });

const server = express();
server.use(bodyParser.json());

export default server;
