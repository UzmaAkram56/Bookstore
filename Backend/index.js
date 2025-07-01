import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoutes from "./route/contact.route.js";
import subscriberRoutes from "./route/subscriber.route.js";
const app = express();

app.use(cors());

dotenv.config();
app.use(express.json());  //use middleware ///the data we are passing from body pass in json format.....

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//Connect to mpongodb
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

//Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use('/contact', contactRoutes);
app.use("/subscribe", subscriberRoutes);




app.listen(port, () => {
  console.log(`Server is  listening on port ${port}`);
});
