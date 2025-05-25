const RiwayatSewa = db.define("riwayat_sewa", {
  sewa_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  penyewa_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  kamar_id: {
    type: DataTypes.INTEGER,
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
  status: {
    type: DataTypes.ENUM("aktif", "selesai", "batal"),
    defaultValue: "aktif",
  },
}, {
  timestamps: false,
});

db.sync().then(() => console.log("RiwayatSewa model tersinkron"));

export default RiwayatSewa;
