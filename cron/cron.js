const  schedule = require('node-schedule');
const Book = require('../models/book.model');
exports.job = schedule.scheduleJob('0 * * * * *', () =>{
    console.log("running cronjob");
    Book.destroy({
        where: {},
        trunate: true
    });

    const newBook = Book.build({
        title: 'the hobbit',
        author: 'J.R. Tolkien',
        isbn: '0123456789',
        genre: 'fantasy'
    });

    newBook.save();
});