import express from "express";
import { getBook, searchBooks } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.get("/search", searchBooks);


export default router;
