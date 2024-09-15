import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (_request, response) => {
  response.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED ON ${PORT} PORT`);
});
