import { Region } from "@prisma/client";

export default interface AccountDto {
  puuid: string;
  gameName?: string;
  tagLine?: string;
  region?: Region;
}
