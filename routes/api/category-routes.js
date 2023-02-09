import express from "express";
import { Category, Product } from "../../models/index.js";

const categoryRoutes = express.Router();

// GET all categories and associated Products (with attributes) (GET /api/categories)
categoryRoutes.get("/", async (req, res) => {
  try {
    const dbCategoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one category by its `id` value and associated Products (with attributes) (GET /api/categories/:id)
categoryRoutes.get("/:id", async (req, res) => {
  try {
    const dbCategoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new category (POST /api/categories)
categoryRoutes.post("/", async (req, res) => {
  try {
    const dbCategoryData = await Category.create(req.body);
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT update a category by its `id` value (PUT /api/categories/:id)
categoryRoutes.put("/:id", async (req, res) => {
  try {
    const dbCategoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    console.log("aaaaaaa", dbCategoryData);
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE a category by its `id` value (DELETE /api/categories/:id)
categoryRoutes.delete("/:id", async (req, res) => {
  try {
    // update product to set category_id to null
    const dbProductData = await Product.update(
      { category_id: null },
      {
        where: {
          category_id: req.params.id,
        },
      }
    );

    // delete category
    const dbCategoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dbCategoryData) {
      res.status(404).json({ message: "No category found with this id" });
      return;
    }
    res.json(dbCategoryData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default categoryRoutes;
