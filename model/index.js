const {Sequelize,DataTypes} = require('sequelize')//cjs format
const databaseConfig = require('../config/dbConfig')
const makeBlogTable = require('./blogModel')
const makeUserTable = require('./userModel')
//import{Sequelize,DataTypes} from 'sequelize'
const sequelize =new Sequelize(databaseConfig.db,databaseConfig.username2,databaseConfig.password,{
    host:databaseConfig.host,
    port:databaseConfig.port, 
    dialect: databaseConfig.dialect,
    
    operationAliases:false,
    pool:{
        max:5,//katiwota user le at a time tyo database use
        min:0,
        acquire:3000,
        idle:10000
    }//related to connection
})
sequelize.authenticate()
.then(()=>{
 console.log("username password milyo")
})
.catch((err)=>{
    console.log("error ayyo",err)
})
const db={}//db is object
db.Sequelize=Sequelize//class
db.sequelize=sequelize//object

/*db={
    Sequelize:Sequelize,
    sequelize:sequelize
} esari ni lekhna sakinxa*/

db.blogs=makeBlogTable(sequelize,DataTypes)
db.users=makeUserTable(sequelize,DataTypes)
db.sequelize.sync({force:false}).then(()=>{
    console.log("Synced done!")
})
module.exports=db