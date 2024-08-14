import { Router } from "express";
import riotLolAccountsController from "../controllers/riotLolAccounts.controller";

const riotLolAccount = Router();

riotLolAccount
.get(
  "/:region/:gameName/:tagLine",
  riotLolAccountsController.getByGameNameAndTagLine
);

export default riotLolAccount;
