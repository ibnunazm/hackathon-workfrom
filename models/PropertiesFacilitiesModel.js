import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Properties from './PropertyModel.js';
import Facilities from './FacilitiesModel.js';

const { DataTypes } = Sequelize;

const PropertiesFacilities = db.define('properties_facilities', {
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
    facilityId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
}, {
    freezeTableName: true,
});

Properties.hasMany(PropertiesFacilities);
PropertiesFacilities.belongsTo(Properties, {foreignKey: 'propertyId'});
Facilities.hasMany(PropertiesFacilities);
PropertiesFacilities.belongsTo(Facilities, {foreignKey: 'facilityId'});


export default PropertiesFacilities;
