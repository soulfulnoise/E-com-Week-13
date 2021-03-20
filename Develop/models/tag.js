const{ Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const { Tag } = require('./index.js');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement:true
        },
        tag_name: {
            type:DataTypes.STRING
        }
    },
    {
     sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
    }
);

module.exports = Tag;

