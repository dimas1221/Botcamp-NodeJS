const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    supr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supr_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    supr_contact_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    supr_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "supr_id_pk",
        unique: true,
        fields: [
          { name: "supr_id" },
        ]
      },
    ]
  });
};
