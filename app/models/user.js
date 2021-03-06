/*
 * @Date: 2021-02-07 14:46:39
 * @Description: 
 * @LastEditors: jun
 * @LastEditTime: 2021-02-07 17:37:56
 * @FilePath: \koa-demo\models\user.js
 */


const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define( "user",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true, // 自动增长  
      primaryKey: true, // 主键
    },
    typeId: {
      type: Sequelize.INTEGER,
      autoIncrement: false,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false, // 是否为空
      validate: {
        notEmpty: {
          msg: '不允许为空字符串'
        },
        /* isIn: {
          args: [['test1','test2']],
          msg: '仅允许123'
        }, */
        len: {
          args: [3,6],
          msg: '长度为3-6'
        }
      }
    },
    nameMaster: {
      type: Sequelize.STRING,
      defaultValue: '' // 默认值
    }
  },
  {
    sequelize,
    timestamps: true,//禁用时间戳
    tableName: "user",//明确定义表名
  }
);

module.exports = User;


