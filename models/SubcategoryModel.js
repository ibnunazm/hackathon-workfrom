import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Categories from './CategoryModel.js';

const { DataTypes } = Sequelize;

const Subcategories = db.define('subcategories', {
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    categoryId:{
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: true,
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    }
}, {
    freezeTableName: true,
});

Categories.hasMany(Subcategories);
Subcategories.belongsTo(Categories, {foreignKey: 'categoryId'});

export default Subcategories;
