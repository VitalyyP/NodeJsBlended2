const Book = require("../../models/Book");

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) {
      return res.status(400).json({
        message: `Cannot update with this id: ${req.params.id}`,
        code: 400,
        data: book,
      });
    }
    return res.status(200).json({ message: "ok", code: 200, data: book });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = updateBook;
