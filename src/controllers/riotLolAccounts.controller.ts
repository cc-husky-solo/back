import { Request, Response } from "express";
import riotLolAccountsModel, {
  GetByGameNameAndTagLine,
} from "../models/riotLolAccounts.model";
import { Region, RiotLolAccount } from "@prisma/client";
import AccountDto from "../interfaces/AccountDto";
import { getByGameNameAndTagLine as riotApiGetAccount } from "../api/riot/account";

const riotLolAccountsController = {
  getByGameNameAndTagLine: async (
    req: Request<GetByGameNameAndTagLine>,
    res: Response
  ) => {
    const params: GetByGameNameAndTagLine = req.params;
    try {
      if (!(params.region.toUpperCase() in Region)) res.status(400).json();
      const results = await riotLolAccountsModel.getByGameNameAndTagLine(
        params
      );
      if (results) res.status(200).json(results);
      else {
        const results = await riotApiGetAccount(params);
        if (results) {
          results.region = params.region.toUpperCase() as Region;
          const newAccount = await riotLolAccountsModel.addAccount(results);
          res.status(200).json(newAccount);
        } else res.status(404).json(results);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addAccount: async (req: Request, res: Response) => {
    const body = req.body as AccountDto;
    try {
      const results: RiotLolAccount = await riotLolAccountsModel.addAccount(
        body
      );
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

export default riotLolAccountsController;
