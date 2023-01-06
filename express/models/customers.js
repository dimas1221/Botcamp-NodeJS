const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    cust_id: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      primaryKey: true
    },
    cust_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    cust_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cust_id_pk",
        unique: true,
        fields: [
          { name: "cust_id" },
        ]
      },
    ]
  });
};
