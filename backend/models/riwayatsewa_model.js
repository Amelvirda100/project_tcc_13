import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Penyewa from "./penyewa.js";
import Kamar from "./kamar.js";

const { DataTypes } = Sequelize;

const RiwayatSewa = db.define("riwayat_sewa", {
  sewa_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  penyewa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Penyewa,
      key: "penyewa_id",
    },
  },
  kamar_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Kamar,
      key: "kamar_id",
    },
  },
  status: {
    type: DataTypes.ENUM('aktif', 'selesai', 'batal'),
    defaultValue: 'aktif',
  },
}, {
  timestamps: false,
});

db.sync().then(() => console.log("RiwayatSewa model tersinkron"));

export default RiwayatSewa;
