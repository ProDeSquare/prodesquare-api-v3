import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const server: Express = express();
const PORT: number = +process.env.PORT || 8000;

server.get("/", (req: Request, res: Response): void => {
  res.send("Hello World!");
});

server.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
