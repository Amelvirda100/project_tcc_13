import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Penyewa = db.define("penyewa", {
  penyewa_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  telepon: DataTypes.STRING,
  alamat: DataTypes.TEXT,
}, {
  timestamps: false,
});

db.sync().then(() => console.log("Penyewa model tersinkron"));

export default Penyewa;