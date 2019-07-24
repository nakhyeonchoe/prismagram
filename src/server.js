require("dotenv").config();
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });
// 미들 웨어(morgan) 사용 - GraphQLServer에 express 서버 내장되어 있음 
server.express.use(logger("dev"));

server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);
// server.start 안에 callback 함수 입력. Server running on port ${PORT} 값 리턴