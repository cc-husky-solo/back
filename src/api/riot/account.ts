import AccountDto from "../../interfaces/AccountDto";
import { GetByGameNameAndTagLine } from "../../models/riotLolAccounts.model";

const protocol = "https://";
const path = ".api.riotgames.com/riot/account/v1/accounts/";

const RIOT_API_KEY = process.env.RIOT_API_KEY ?? "";

export const getByGameNameAndTagLine = async (
  params: GetByGameNameAndTagLine
): Promise<AccountDto | null> => {
  const route = "by-riot-id/";

  const completePath =
    protocol +
    params.region.toLowerCase() +
    path +
    route +
    params.gameName +
    "/" +
    params.tagLine;

  const config: RequestInit = {
    headers: {
      "X-Riot-Token": RIOT_API_KEY,
    },
  };

  const response: AccountDto = await (await fetch(completePath, config)).json();
  if (response.puuid) return response;
  else {
    console.log(completePath, response);
    return null;
  }
};
