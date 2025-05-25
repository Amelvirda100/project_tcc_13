import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import RiwayatSewa from "./riwayatsewa_model.js";

const { DataTypes } = Sequelize;

const Pembayaran = db.define("pembayaran", {
  pembayaran_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  sewa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: RiwayatSewa,
      key: "sewa_id",
    },
  },
  tgl_bayar: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  tgl_mulai: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  tgl_selesai: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  jumlah: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  metode_bayar: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('lunas', 'belum lunas'),
    defaultValue: 'belum lunas',
  },
}, {
  timestamps: false,
});

db.sync().then(() => console.log("Pembayaran model tersinkron"));

export default Pembayaran;
