const {Sequelize} = require('sequelize');

database = process.env.DB_NAME;
user = process.env.DB_USER;
pass = process.env.DB_PASS;


const db = new Sequelize({
    host: 'localhost',
    dialect: 'postgres', 
    database: database,
    username: user,
    password: pass
});

try{
    db.authenticate();
    console.log('DB connect success');
    db.sync();
    console.log('Sync Success.')
}catch(e){
    console.log(e);
}

module.exports = db;