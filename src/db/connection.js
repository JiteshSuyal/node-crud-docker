const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
console.log(process.env.DATABASE);
mongoose.connect(process.env.DATABASE, async () => {
  try {
    console.log("Database is Connected succesfully");
  } catch (error) {
    console.log(error);
  }
});
