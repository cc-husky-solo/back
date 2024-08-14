import { PrismaClient, Region, RiotLolAccount } from "@prisma/client";
import AccountDto from "../interfaces/AccountDto";

export interface GetByGameNameAndTagLine {
  region: Region;
  gameName: string;
  tagLine: string;
}

const prisma = new PrismaClient();

const riotLolAccountsModel = {
  getByGameNameAndTagLine: async (
    params: GetByGameNameAndTagLine
  ): Promise<RiotLolAccount | null> => {
    const results: RiotLolAccount | null =
      await prisma.riotLolAccount.findFirst({
        where: {
          gameName: {
            equals: params.gameName,
            mode: "insensitive",
          },
          tagLine: {
            equals: params.tagLine,
            mode: "insensitive",
          },
          region: params.region.toUpperCase() as Region,
        },
      });

    return results;
  },

  addAccount: async (params: AccountDto): Promise<RiotLolAccount> => {
    const results: RiotLolAccount = await prisma.riotLolAccount.upsert({
      where: {
        puuid: params.puuid,
      },
      update: params,
      create: params,
    });

    return results;
  },
};

export default riotLolAccountsModel;
