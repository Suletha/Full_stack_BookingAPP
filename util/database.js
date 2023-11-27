const Sequelize=require('sequelize');

const sequelize=new Sequelize('node_complete','root','Krishna@2304',{
    dialect:'mysql',
    host: 'localhost'
});

module.exports=sequelize;