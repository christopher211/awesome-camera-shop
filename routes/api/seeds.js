import express from "express";
// import seedAll from "../../seeds/index.js";

const seedRoutes = express.Router();

seedRoutes.post("/all", (req, res) => {
  // try {
  //   seedAll();
  //   res.status(200).json({ message: "Database Seeded!" });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

export default seedRoutes;
