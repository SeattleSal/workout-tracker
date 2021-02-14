const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
// const db = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

// Routes
app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/apiRoutes"))

// Listen on port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});