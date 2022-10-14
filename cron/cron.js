const  schedule = require('node-schedule');
const Book = require('../models/book.model');
exports.job = schedule.scheduleJob('0 * * * *', () =>{
    console.log("running cronjob");
    Book.deleteMany({}, () => null);
    const sampleBook = new Book({title: 'the hobbit', author: 'J. R. Tolkien', isbn: '123456789', genre: 'fantasy'});
    sampleBook.save();
});