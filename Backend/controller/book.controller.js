import Book from "../model/book.model.js";

// creating function
export const getBook = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book); //200 is for the success code
  } catch (error) {
    console.log("error: ", error);
    res.status(500).json(error); //500 code is for internal server error
  }
};

//new function for searcg
export const searchBooks = async (req, res) => {
  const { query } = req.query;
  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
        { name: { $regex: query, $options: "i" } },

      ],
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
};
