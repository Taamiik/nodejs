import express from "express";
import { sum } from "./about";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (_request, response) => {
  response.send("Hello world");
  console.log(sum(1, 2));
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT} PORT`);
});
