import Product from "../models/Product.js";

const productData = [
  {
    product_name: "Digital SLR Camera",
    price: 1499.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Point and Shoot Camera",
    price: 99.99,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: "35mm Film Camera",
    price: 199.99,
    stock: 15,
    category_id: 1,
  },
  {
    product_name: "Camera Bag",
    price: 49.99,
    stock: 50,
    category_id: 4,
  },
  {
    product_name: "Camera Lens",
    price: 499.99,
    stock: 22,
    category_id: 2,
  },
  {
    product_name: "Camera Tripod",
    price: 99.99,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: "Camera Lens Filter",
    price: 19.99,
    stock: 100,
    category_id: 2,
  },
  {
    product_name: "Camera Lens Hood",
    price: 29.99,
    stock: 100,
    category_id: 2,
  },
  {
    product_name: "Camera Lens Cap",
    price: 9.99,
    stock: 100,
    category_id: 3,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

export default seedProducts;
