/*
 * @Date: 2021-02-07 14:42:12
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 16:36:48
 * @FilePath: \koa-demo\config\db.js
 */
/* const Sequelize = require('sequelize');

const db = {
  database: 'demo_db', // 使用哪个数据库
  username: 'root', // 用户名
  password: '123456', // 口令
  host: 'localhost', // 主机名
  port: 3306 // 端口号，MySQL默认3306
}


// 使用sequelize操作数据库，必须导入数据库依赖包，这里导的是mysql2
const sequelize = new Sequelize(db.database, db.username, db.password, {
  dialect: 'mysql',
  host: db.host,
  port: db.port,
  logging: true, // 是否显示SQL语句
  timezone: "+08:00", // 时区，如果没有设置，会导致数据库中的时间字段与中国时区时间相差8小时
  define: {
    timestamps: true, // 是否自动创建时间字段， 默认会自动创建createdAt、updatedAt
    paranoid: true, // 是否自动创建deletedAt字段
    createdAt: "create_time", // 重命名字段
    updatedAt: "update_time",
    deletedAt: "delete_time",
    underscored: true // 开启下划线命名方式，默认是驼峰命名
  }
});

sequelize.sync({
  force: false // 每次启动都重新自动创建表
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database', err)
  })

module.exports = {
  sequelize
} */


const Sequelize = require('sequelize')
const sequelize = new Sequelize('demo_db','root','123456',{
    host:'localhost',
    dialect:'mysql',
    logging: true, // 是否显示SQL语句
    timezone: '+08:00',  //东八时区
    operatorsAliases:false,
    dialectOptions:{
        //字符集
        charset:'utf8mb4',
        // collate:'utf8mb4_unicode_ci',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    define: {
      timestamps: true, // 是否自动创建时间字段， 默认会自动创建createdAt、updatedAt
      paranoid: false, // 是否自动创建deletedAt字段
      createdAt: "create_time", // 重命名字段
      updatedAt: "update_time",
      deletedAt: "delete_time",
      underscored: true, // 开启下划线命名方式，默认是驼峰命名
      freezeTableName: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    timezone: '+08:00'  //东八时区
})

sequelize.sync({
  force: false // 每次启动都重新自动创建表
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to the database', err)
  })

module.exports = sequelize
