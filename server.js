import express from "express";
import appAPI from "./routes/index.js";
import connection from "./config/connection.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(appAPI);

// sync sequelize models to the database, then turn on the server
connection.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
