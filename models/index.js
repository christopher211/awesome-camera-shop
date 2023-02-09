// import models
import Product from "./Product.js";
import Category from "./Category.js";
import Tag from "./Tag.js";
import ProductTag from "./ProductTag.js";

// Products belongsTo only one Category, with cascade delete
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Categories have many Products, with cascade delete
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag), with cascade delete
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

// Tags belongToMany Products (through ProductTag), with cascade delete
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
  onDelete: "CASCADE",
});

export { Product, Category, Tag, ProductTag };
