import mongoose from "mongoose";

//defining scehma for database
const bookSchema = mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String
})


//Noe creating model for schema
const Book = mongoose.model("Book", bookSchema);
export default Book;