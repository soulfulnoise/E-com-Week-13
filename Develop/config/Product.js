//importing important parts of sequelize libary
const { Model, DataTypes } = require('sequlize');
//importing the data base connection from config.js
const sequelize = require('../config/connection');

//Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            validate: {
                isDECIMAL:true
            }
        },
            stock: {
                type:DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    isDECIMAL:true
                }
            },
        }
)