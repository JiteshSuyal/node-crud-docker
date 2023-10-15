const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// Environment Path
require("dotenv").config({ path: "./config.env" });

// Routes
const userRoute = require("./routes/user.route");

// Environment Variable
const port = process.env.PORT;

// Database Connection
require("./db/connection");

app.use(cors());
app.use(express.json());
app.use(
  morgan(
    "[:method] :url :date[web] :remote-addr => :status :response-time ms :res[content-length] bytes"
  )
);
app.use(express.urlencoded({ extended: true }));

// Calling Routes
app.use("/user", userRoute);

//Restrict Invalid Routes
app.use((req, res) => {
  console.log("Invalid Page Request");
  res
    .send(
      "<h1><i><strong> ( 404 ) Page Not Found , Invalid page request</i></h1>"
    )
    .status(400);
});
///just
/**========================================================================
 *                           Listening Port at 5000
 *========================================================================**/
app.listen(port, () => {
  console.log(`server is starting on port ${port}`);
});
