import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Properties from './PropertyModel.js';
import Amenities from './AmenitiesModel.js';

const { DataTypes } = Sequelize;

const PropertiesAmenities = db.define('properties_amenities', {
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
    amenityId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true,
});

Properties.hasMany(PropertiesAmenities);
PropertiesAmenities.belongsTo(Properties, {foreignKey: 'propertyId'});
Amenities.hasMany(PropertiesAmenities);
PropertiesAmenities.belongsTo(Amenities, {foreignKey: 'amenityId'});


export default PropertiesAmenities;
