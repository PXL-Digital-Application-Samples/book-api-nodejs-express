const Sequelize = require('sequelize');
const sequelize = require('./../db');

const Book = sequelize.define('book', {
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: true
    },
    isbn: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
});

sequelize.sync().then(() => 
    console.log('Book table created successfully')
);

module.exports = Book;