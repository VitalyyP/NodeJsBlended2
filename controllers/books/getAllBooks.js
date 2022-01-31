const Book = require("../../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    return res
      .status(200)
      .json({ message: "ok", code: 200, data: books, count: books.length });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAllBooks;
