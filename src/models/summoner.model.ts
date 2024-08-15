import { getByPuuid as riotApiGetSummoner } from "../api/riot/summoner";
import RegionId from "../interfaces/RegionId";
import SummonerDto from "../interfaces/SummonerDto";

export interface GetByPuuid {
  regionId: RegionId;
  puuid: string;
}

const summonerModel = {
  getByPuuid: async (params: GetByPuuid): Promise<SummonerDto | null> => {
    return await riotApiGetSummoner(params);
  },
};

export default summonerModel;
