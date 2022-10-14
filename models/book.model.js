const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {type: String},
    author: {type: String},
    isbn: {type: String},
    genre: {type: String}
});
const Book = mongoose.model(
    "Book", bookSchema
);

module.exports = Book;