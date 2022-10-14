const Book = require("../models/book.model")

exports.getBooks = async(req, res) =>{
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.createBook = (req, res) => {
    const newBook = new Book(req.body);

    newBook.save()
        .then((book) => res.json(book))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.deleteBook = (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => res.json({deletedId: req.params.id, message: "success"}))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateBook = (req, res) => {
    Book.findById(req.params.id || req.body._id)
        .then(book => {
           book.title = req.body.title;
           book.author = req.body.author;
           book.isbn = req.body.isbn;
           book.genre = req.body.genre;

           book.save()
               .then((book) => res.json(book))
        })
        .catch(err => res.status(400).json('Error: ' + err));
}