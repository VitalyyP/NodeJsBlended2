const Book = require("../../models/Book");

const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).json({ message: "ok", code: 201, data: book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = addBook;
