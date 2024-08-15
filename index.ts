import server from "./config";
import indexRouter from "./src/routes";
import riotLolAccountRouter from "./src/routes/riotLolAccount";
import summonerRouter from "./src/routes/summoner";
import leagueRouter from "./src/routes/league";

const PORT = process.env.PORT ?? "";
const SERVER = process.env.SERVER ?? "";

server.use("/", indexRouter);
server.use("/riot/lol/accounts", riotLolAccountRouter);
server.use("/riot/lol/summoners", summonerRouter);
server.use("/riot/lol/league", leagueRouter);

server.listen(PORT, () => {
  console.log(`Server is running at ${SERVER + PORT}`);
});
