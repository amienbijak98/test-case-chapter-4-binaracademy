const express = require("express");
const Router = require("./routers/routers.js");
const app = express();
const port = 3000;

app.use(Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
