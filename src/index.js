import express from "express";
import { minus, sum } from "./utils";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (_request, response) => {
  response.send("Hello world");
  console.log(sum(1, 2));
  console.log(minus(5, 2));
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT} PORT`);
});
