import SummonerDto from "../../interfaces/SummonerDto";
import { GetByPuuid } from "../../models/summoner.model";

const protocol = "https://";
const path = ".api.riotgames.com/lol/summoner/v4/summoners/";

const RIOT_API_KEY = process.env.RIOT_API_KEY ?? "";

export const getByPuuid = async (
  params: GetByPuuid
): Promise<SummonerDto | null> => {
  const route = "by-puuid/";

  const completePath =
    protocol + params.regionId.toLowerCase() + path + route + params.puuid;

  const config: RequestInit = {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  };

  const response: SummonerDto = await (
    await fetch(completePath, config)
  ).json();
  if (response.puuid) return response;
  else {
    console.log(completePath, response);
    return null;
  }
};
