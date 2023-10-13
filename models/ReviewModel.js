import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Users from './UserModel.js';
import Properties from './PropertyModel.js';

const { DataTypes } = Sequelize;

const Reviews = db.define('reviews', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true,
});

Users.hasMany(Reviews);
Reviews.belongsTo(Users, {foreignKey: 'userId'});
Properties.hasMany(Reviews);
Reviews.belongsTo(Properties, {foreignKey: 'propertyId'});

export default Reviews;
