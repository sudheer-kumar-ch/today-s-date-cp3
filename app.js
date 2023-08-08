const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  const todaysDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  response.send(todaysDate);
});

module.exports = app;
