console.clear()

const express = require("express");
const app = express();
const dbConnect = require("./config/dbConnect");
require("dotenv").config();

dbConnect();

app.use(express.json());
app.use("/api/user", require("./routes/user"));

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`server is running on http://Localhost:${PORT}..`)
);
