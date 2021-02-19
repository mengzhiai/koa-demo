const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const Phone = sequelize.define("phone", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  phoneName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phonePrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'phone'
})

module.exports = Phone;