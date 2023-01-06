import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect:"postgres",
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }
)

var DataTypes = require("sequelize").DataTypes;
var _categories = require("./categories");
var _customers = require("./customers");
var _employees = require("./employees");
var _orders = require("./orders");
var _orders_detail = require("./orders_detail");
var _products = require("./products");
var _shippers = require("./shippers");
var _suppliers = require("./suppliers");

// ubah ke arrow function
const initModels =(sequelize)=>{
  var categories = _categories(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var orders_detail = _orders_detail(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var shippers = _shippers(sequelize, DataTypes);
  var suppliers = _suppliers(sequelize, DataTypes);

  orders.belongsToMany(products, { as: 'ordet_prod_id_products', through: orders_detail, foreignKey: "ordet_order_id", otherKey: "ordet_prod_id" });
  products.belongsToMany(orders, { as: 'ordet_order_id_orders', through: orders_detail, foreignKey: "ordet_prod_id", otherKey: "ordet_order_id" });
  products.belongsTo(categories, { as: "prod_cate", foreignKey: "prod_cate_id"});
  categories.hasMany(products, { as: "products", foreignKey: "prod_cate_id"});
  orders.belongsTo(customers, { as: "order_cust", foreignKey: "order_cust_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "order_cust_id"});
  orders_detail.belongsTo(orders, { as: "ordet_order", foreignKey: "ordet_order_id"});
  orders.hasMany(orders_detail, { as: "orders_details", foreignKey: "ordet_order_id"});
  orders_detail.belongsTo(products, { as: "ordet_prod", foreignKey: "ordet_prod_id"});
  products.hasMany(orders_detail, { as: "orders_details", foreignKey: "ordet_prod_id"});
  orders.belongsTo(shippers, { as: "order_ship", foreignKey: "order_ship_id"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "order_ship_id"});
  products.belongsTo(suppliers, { as: "prod_supr", foreignKey: "prod_supr_id"});
  suppliers.hasMany(products, { as: "products", foreignKey: "prod_supr_id"});

  return {
    categories,
    customers,
    employees,
    orders,
    orders_detail,
    products,
    shippers,
    suppliers,
  };
}

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;

const models = initModels(sequelize)
export default models
export{sequelize}