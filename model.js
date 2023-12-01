const {Sequelize} = require('sequelize');
const db = require('./database');

const books = db.define('books', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
    }
},{
    timestamps: false
}

);

module.exports = books;