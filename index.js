const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Bem vindo");
});

app.listen(3000, () => {
  console.log("App rodando");
});
