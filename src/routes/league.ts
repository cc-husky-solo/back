import { Router } from "express";
import leagueController from "../controllers/league.controller";

const league = Router();

league.get("/:regionId/:summonerId", leagueController.getBySummonerId);

export default league;
