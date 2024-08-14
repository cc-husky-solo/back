import server from "./config";
import indexRouter from "./src/routes";
import riotLolAccountRouter from "./src/routes/riotLolAccount";

const PORT = process.env.PORT ?? "";
const SERVER = process.env.SERVER ?? "";

server.use("/", indexRouter);
server.use("/riot/lol/accounts", riotLolAccountRouter);

server.listen(PORT, () => {
  console.log(`Server is running at ${SERVER + PORT}`);
});
