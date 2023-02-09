import express from "express";
// import seedAll from "../../seeds/index.js";
import categoryRoutes from "./category-routes.js";
import productRoutes from "./product-routes.js";
import seedRoutes from "./seeds.js";
import tagRoutes from "./tag-routes.js";

const apiRoutes = express.Router();

apiRoutes.use("/categories", categoryRoutes);
apiRoutes.use("/products", productRoutes);
apiRoutes.use("/tags", tagRoutes);
// apiRoutes.use("/seeds", seedRoutes);

export default apiRoutes;
