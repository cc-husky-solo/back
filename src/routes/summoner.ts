import { Router } from "express";
import summonerController from "../controllers/summoner.controller";

const summoner = Router();

summoner.get("/:regionId/:puuid", summonerController.getByPuuid);

export default summoner;
