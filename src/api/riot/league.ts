import LeagueEntryDto from "../../interfaces/LeagueEntryDto";
import { GetBySummonerId } from "../../models/league.model";

const protocol = "https://";
const path = ".api.riotgames.com/lol/league/v4/entries/";

const RIOT_API_KEY = process.env.RIOT_API_KEY ?? "";

export const getBySummonerId = async (
  params: GetBySummonerId
): Promise<LeagueEntryDto | null> => {
  const route = "by-summoner/";

  const completePath =
    protocol + params.regionId.toLowerCase() + path + route + params.summonerId;

  const config: RequestInit = {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  };

  const response: LeagueEntryDto = (
    await (await fetch(completePath, config)).json()
  )[0];
  if (response.summonerId) return response;
  else {
    console.log(completePath, response);
    return null;
  }
};
