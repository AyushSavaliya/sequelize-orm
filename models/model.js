const { Sequelize, DataTypes } = require('sequelize');
const connection = new Sequelize('mydataBase', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

connection.authenticate().then(() => {
    console.log("DATABASE IS CONNECTED....");
}).catch((err) => {
    console.log("Error" + err);
})
const db = {}
db.Sequelize = Sequelize;
db.connection = connection;
db.connection.sync({ force: false }).then(() => {
    console.log("yes is sync");
}).catch(() => {
    console.log("not is sync");
})
db.users = require('./user')(connection, DataTypes);
module.exports = db;