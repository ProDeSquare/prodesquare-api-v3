import express, { Express } from "express";
import connection from "./db/connection";
import Routes from "./routes";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const server: Express = express();
const PORT: number = +process.env.PORT || 8000;
connection();

server.use(cors());
server.use(`${process.env.ROUTE_PREFIX}`, Routes);

server.listen(PORT, (): void => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
