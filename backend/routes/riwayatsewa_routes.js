import express from "express";
import {
  getRiwayatSewa,
  createRiwayatSewa,
  updateRiwayatSewa,
  deleteRiwayatSewa,
} from "../controller/riwayatsewa_controller.js";

const router = express.Router();

router.get("/sewa", getRiwayatSewa);
router.post("/add-sewa", createRiwayatSewa);
router.put("/edit-sewa/:id", updateRiwayatSewa);
router.delete("/delete-sewa/:id", deleteRiwayatSewa);

export default router;
