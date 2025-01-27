const express = require("express");
const app = express();
const port = 6000;
const body_parser = require("body-parser");
const cors = require("cors");

const AlohaaRouter = require('./router/aloha_router');

app.use(body_parser.json());
app.use(cors());

app.use('/alohaa', AlohaaRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
