// At the start, we need to check whether the environment on which the application is running is PROD or DEV
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// create reference to the index router
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // where our server rendered views are coming from
app.set("layout", "layouts/layout"); // to avoid file duplication such as beginning HTML and ending HTML
app.use(expressLayouts);
app.use(express.static("public")); // inside public folder, which is a standard convention, all of our normal files will be placed such as HTML, CSS and Javascript files

// Integrate application with mongoose (mongodb library)
const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }); // the 'useNewUrlParser' has to be enabled since it is deprecated by mongoose
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Mongoose")); // this will log only the first time the connection is set up

// assign which router should handle the root of our application
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is up and running");
}); // the env file or the server will tell us the port on which we have to listen but for dev purposes, we default to port 3000
