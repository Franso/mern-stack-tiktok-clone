import mongoose from "mongoose";

//create a schema for our app
const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//Collection inside the database
export default mongoose.model("Videos", tiktokSchema);
