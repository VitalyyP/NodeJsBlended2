const { Router } = require("express");
const {
  getAllBooks,
  getBook,
  addBook,
  updateBook,
  removeBook,
} = require("../controllers/books");

const router = Router();

router.get("/", getAllBooks);
router.get("/:id", getBook);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", removeBook);

module.exports = router;
