import Sequelize from "sequelize";
import connection from "../config/connection.js";

const { Model, DataTypes } = Sequelize;

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    returning: true,
    modelName: "category",
  }
);

export default Category;
