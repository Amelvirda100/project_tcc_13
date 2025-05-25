import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Kamar = db.define("kamar", {
  kamar_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nomor_kamar: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  tipe_kamar: DataTypes.STRING,
  harga: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  fasilitas: DataTypes.TEXT,
  status: {
    type: DataTypes.ENUM("kosong", "terisi"),
    defaultValue: "kosong",
  },
    gambar_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

db.sync().then(() => console.log("Kamar model tersinkron"));

export default Kamar;
