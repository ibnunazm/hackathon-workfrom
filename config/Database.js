import { Sequelize } from 'sequelize';

const db = new Sequelize('workfrom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;