import {Sequelize} from "sequelize";

const db = new Sequelize('gallery','root','',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;