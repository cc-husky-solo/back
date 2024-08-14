import { PrismaClient, Region } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const khaski = await prisma.riotLolAccount.upsert({
    where: {
      puuid:
        "SaRpxzucUaaudE1HIHfUyWtV35uydnlUoR-e6Ubjb3kDo5xbeTbnoecxPELzuVGNYJ-pvSgdIPlZ1A",
    },
    update: {},
    create: {
      puuid:
        "SaRpxzucUaaudE1HIHfUyWtV35uydnlUoR-e6Ubjb3kDo5xbeTbnoecxPELzuVGNYJ-pvSgdIPlZ1A",
      gameName: "khaski",
      tagLine: "jp1",
      region: Region.ASIA,
    },
  });
  console.log({ khaski });
};

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
