import Sequelize from "sequelize";
import connection from "../config/connection.js";
import Product from "./Product.js";
import Tag from "./Tag.js";

const { Model, DataTypes } = Sequelize;

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: "id",
      },
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

export default ProductTag;
