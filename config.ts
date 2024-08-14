import express from "express";
import dotEnv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotEnv.config({ path: "./.env" });

const server = express();
server.use(bodyParser.json());
server.use(cors());

export default server;
