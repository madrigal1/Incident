require("./models/dbInit");
const express = require("express");
const landingRoute = require("./routes/landingRoute");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", landingRoute);

app.listen(3000, () => console.log("server running"));
