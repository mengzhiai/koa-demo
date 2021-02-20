const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const Student = sequelize.define( "student",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true, // 自动增长  
      primaryKey: true, // 主键
    },
    /* studentId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }, */
    name: {
      type: Sequelize.STRING,
      allowNull: false, // 是否为空
    },
  },
  {
    sequelize,
    timestamps: true,//禁用时间戳
    tableName: "student",//明确定义表名
  }
);

module.exports = Student;