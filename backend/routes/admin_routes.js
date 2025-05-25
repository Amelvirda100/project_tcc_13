import express from "express";
import { createAdmin,
         getAdmin
 } from "../controller/admin_controller.js";

const router = express.Router();

router.post("/add-admin", createAdmin);
router.get("/get-admin", getAdmin);

export default router;
