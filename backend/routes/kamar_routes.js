import express from "express";
import {
  getKamar,
  createKamar,
  updateKamar,
  deleteKamar,
} from "../controller/kamar_controller.js";

const router = express.Router();

router.get("/kamar", getKamar);
router.post("/add-kamar", createKamar);
router.put("/edit-kamar/:id", updateKamar);
router.delete("/delete-kamar/:id", deleteKamar);

export default router;
