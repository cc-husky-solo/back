import { getBySummonerId } from "../api/riot/league";
import LeagueEntryDto from "../interfaces/LeagueEntryDto";
import RegionId from "../interfaces/RegionId";

export interface GetBySummonerId {
  regionId: RegionId;
  summonerId: string;
}

const leagueModel = {
  getBySummonerId: async (
    params: GetBySummonerId
  ): Promise<LeagueEntryDto | null> => {
    return await getBySummonerId(params);
  },
};

export default leagueModel;
