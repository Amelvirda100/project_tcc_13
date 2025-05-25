import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";

// Route
import AdminRoute from "./routes/admin_routes.js";
import KamarRoute from "./routes/kamar_routes.js";
import PenyewaRoute from "./routes/penyewa_routes.js";
import RiwayatSewaRoute from "./routes/riwayatsewa_routes.js";
import PembayaranRoute from "./routes/pembayaran_routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(AdminRoute);
app.use(KamarRoute);
app.use(PenyewaRoute);
app.use(RiwayatSewaRoute);
app.use(PembayaranRoute);

(async () => {
  try {
    await db.authenticate();
    console.log("DB tersambung");
    await db.sync();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Database error:", err);
  }
})();
