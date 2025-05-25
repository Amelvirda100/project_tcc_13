import Admin from "../models/admin_model.js";
import bcrypt from "bcryptjs";

// GET semua admin
async function getAdmin(req, res) {
  try {
    const result = await Admin.findAll({
      attributes: ["admin_id", "username"]
    });
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Gagal mengambil data admin" });
  }
}

// POST admin baru
async function createAdmin(req, res) {
  try {
    const { username, password } = req.body;

    const existing = await Admin.findOne({ where: { username } });
    if (existing) return res.status(409).json({ msg: "Username sudah dipakai" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      username,
      password_hash: hash
    });

    return res.status(201).json({ msg: "Admin berhasil ditambahkan", admin });
  } catch (error) {
    console.log("❌ Error di createAdmin:", error.message);
    res.status(500).json({ msg: "Gagal menambahkan admin" });
  }
}

export { getAdmin, createAdmin };
