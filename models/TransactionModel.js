import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Properties from './PropertyModel.js';
import Users from './UserModel.js';

const { DataTypes } = Sequelize;

const Transactions = db.define('Transactions', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    propertyId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    totalTime:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    startDate:{
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true,
});

Properties.hasMany(Transactions);
Transactions.belongsTo(Properties, {foreignKey: 'propertyId'});
Users.hasMany(Transactions);
Transactions.belongsTo(Users, {foreignKey: 'userId'});


export default Transactions;
