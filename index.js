const express = require("express");
const app = express();
const router = require("./config/router/router");

app.use(express.json());

app.use("/api/projects", router);

app.listen(5005, () => {
  console.log("listening on port 5005");
});
