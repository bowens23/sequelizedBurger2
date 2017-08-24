
'use strict'; 
 module.exports = function (sequelize, DataTypes) { 
     var burger = sequelize.define('burger', { 
        id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
            },
        burger_name: DataTypes.STRING, 
        devoured: DataTypes.BOOLEAN,
        time: {type: DataTypes.DATE}

     }, { 
        underscored: true, 
        timestamps: false, 
        classMethods: { 
             associate: function (models) { 
             },

         } 
     }); 
     return burger; 
 }; 

//this is where all the tables get defined.