import express from "express";
import {
  getPembayaran,
  createPembayaran,
  updatePembayaran,
  deletePembayaran,
} from "../controller/pembayaran_controller.js";

const router = express.Router();

router.get("/pembayaran", getPembayaran);
router.post("/add-pembayaran", createPembayaran);
router.put("/edit-pembayaran/:id", updatePembayaran);
router.delete("/delete-pembayaran/:id", deletePembayaran);

export default router;
