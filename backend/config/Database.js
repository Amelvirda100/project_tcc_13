import { Sequelize } from "sequelize";

const db = new Sequelize("project_kosan", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306, 
});

export default db;
