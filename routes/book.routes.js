const express = require('express');
const bookRouter = express.Router();

const bookController = require('../controllers/book.controller');

bookRouter.get('/', bookController.getBooks);
bookRouter.post('/', bookController.createBook);
bookRouter.delete('/:id', bookController.deleteBook);
bookRouter.put('/', bookController.updateBook);
bookRouter.put('/:id', bookController.updateBook);

module.exports = bookRouter;