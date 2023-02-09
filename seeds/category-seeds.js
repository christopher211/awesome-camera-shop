import Category from "../models/Category.js";

const categoryData = [
  {
    category_name: "Cameras",
  },
  {
    category_name: "Lenses",
  },
  {
    category_name: "Accessories",
  },
  {
    category_name: "Bags",
  },
  {
    category_name: "Tripods",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

export default seedCategories;
