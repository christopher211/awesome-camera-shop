import Sequelize from "sequelize";
import connection from "../config/connection.js";

const { Model, DataTypes } = Sequelize;

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

export default Tag;
