import { Request, Response } from "express";
import leagueModel, { GetBySummonerId } from "../models/league.model";

const leagueController = {
  getBySummonerId: async (req: Request<GetBySummonerId>, res: Response) => {
    const results = await leagueModel.getBySummonerId(req.params);
    if (results) {
      res.status(200).json(results);
    } else res.status(404).json();
  },
};

export default leagueController;
