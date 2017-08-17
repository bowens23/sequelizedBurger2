
'use strict'; 
 module.exports = function (sequelize, DataTypes) { 
     var burger = sequelize.define('burger', { 
         name: DataTypes.STRING, 
         devoured: DataTypes.BOOLEAN 
     }, { 
         underscored: true, 
         classMethods: { 
             associate: function (models) { 
             } 
         } 
     }); 
     return burger; 
 }; 

//this is where all the tables get defined.