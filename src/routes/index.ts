import { Request, Response, Router } from "express";

const index = Router();

index.get("/", (req: Request, res: Response) => {
  res.json("Server is running");
});

export default index;