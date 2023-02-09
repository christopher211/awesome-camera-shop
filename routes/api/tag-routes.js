import express from "express";
import { Tag, Product, ProductTag } from "../../models/index.js";

const tagRoutes = express.Router();

// GET all tags and associated Product data (GET /api/tags)
tagRoutes.get("/", async (req, res) => {
  try {
    const dbTagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one tag by its `id` value and associated Product data (GET /api/tags/:id)
tagRoutes.get("/:id", async (req, res) => {
  try {
    const dbTagData = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (!dbTagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST create a new tag (POST /api/tags)
tagRoutes.post("/", async (req, res) => {
  try {
    const dbTagData = await Tag.create(req.body);
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// PUT update a tag's name by its `id` value (PUT /api/tags/:id)
tagRoutes.put("/:id", async (req, res) => {
  try {
    const dbTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!dbTagData[0]) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// DELETE one tag by its `id` value (DELETE /api/tags/:id)
tagRoutes.delete("/:id", async (req, res) => {
  try {
    // delete any associated product tags
    const dbProductTagData = await ProductTag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });

    // delete the tag
    const dbTagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!dbTagData) {
      res.status(404).json({ message: "No tag found with this id" });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

export default tagRoutes;
