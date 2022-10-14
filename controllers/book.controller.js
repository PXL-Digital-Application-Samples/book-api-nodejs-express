const Book = require("../models/book.model")

exports.getBooks = async(req, res) =>{
   Book.findAll({}).then((err, books) => {
    if(err){
        res.send(err);
    }
    res.json(books);
   });
}

exports.createBook = async (req, res) => {
    const newBook = Book.build({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre
    });

    const savedBook = await newBook.save();
    res.json(savedBook);
}

exports.deleteBook = (req, res) => {
   Book.findByPk(req.params.id)
        .then(book => book.destroy().then(() => res.json({success: true})));
}

exports.updateBook = (req, res) => {
   Book.findByPk(req.params.id || req.body._id)
        .then(book => {
            book.set({
                title: req.body.title,
                author: req.body.author,
                isbn: req.body.isbn,
                genre: req.body.genre
            });

            book.save().then(book => res.json(book));
        });
}