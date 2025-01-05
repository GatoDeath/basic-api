import mongoose from "mongoose";

// conect to a database (mongoDB)
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/note-app")
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch((err) => {
    console.log("DB Connection Failed: ", err);
  });
