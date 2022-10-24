const express = require("express");
const connect = require("./database/connection");

require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 8080;

// create express instance
const app = express();
app.use(express.json());

// database connection
connect();

// routes
app.use("/api", require("./router/router"));

app.get("/", (req, res) => {
  res.send("Server Request");
});

app.listen(PORT, console.log("Server is running on http://localhost:4000"));
