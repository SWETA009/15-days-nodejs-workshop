const databaseConfig={
    db:process.env.DATABASENAME,
    username2:process.env.USERNAME2,
    password:process.env.PASSWORD,
    host:process.env.HOST,
    port:49316,
    dialect:'mysql'
};
module.exports=databaseConfig;