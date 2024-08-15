import { Request, Response } from "express";
import summonerModel, { GetByPuuid } from "../models/summoner.model";

const summonerController = {
  getByPuuid: async (req: Request<GetByPuuid>, res: Response) => {
    const results = await summonerModel.getByPuuid(req.params);
    if (results) res.status(200).json(results);
    else res.status(404).json();
  },
};

export default summonerController;
