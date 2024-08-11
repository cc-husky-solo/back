import server from "./config";
import indexRouter from "./src/routes";

const PORT = process.env.PORT ?? "";
const SERVER = process.env.SERVER ?? "";

server.use("/", indexRouter);

server.listen(PORT, () => {
  console.log(`Server is running at ${SERVER + PORT}`);
});
