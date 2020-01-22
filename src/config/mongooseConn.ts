import mongoose from "mongoose";
import config from "./config";

const dburl: string = config.development.db.host;

mongoose.connect(dburl, { useNewUrlParser: true });
mongoose.connection.on("connected", function() {
  console.log("Mongoose connected to " + dburl);
});
mongoose.connection.on("error", function(error) {
  console.log(" Mongoose connected error " + error);
});
mongoose.connection.on("disconnected", function() {
  console.log(" Mongoose disconnected ");
});

import "../models";
