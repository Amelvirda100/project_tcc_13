import express from "express";
import {
  getPenyewa,
  createPenyewa,
  updatePenyewa,
  deletePenyewa,
} from "../controller/penyewa_controller.js";

const router = express.Router();

router.get("/penyewa", getPenyewa);
router.post("/add-penyewa", createPenyewa);
router.put("/edit-penyewa/:id", updatePenyewa);
router.delete("/delete-penyewa/:id", deletePenyewa);

export default router;
