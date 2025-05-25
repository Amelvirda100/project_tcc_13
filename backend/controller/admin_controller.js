import Admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function loginAdmin(req, res) {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) return res.status(404).json({ msg: "Admin tidak ditemukan" });

    const match = await bcrypt.compare(password, admin.password_hash);
    if (!match) return res.status(401).json({ msg: "Password salah" });

    const token = jwt.sign(
      { adminId: admin.admin_id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error.message);
  }
}

export { loginAdmin };
