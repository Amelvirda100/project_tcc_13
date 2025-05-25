import Kamar from "../models/kamar_model.js";

// GET
async function getKamar(req, res) {
  try {
    const result = await Kamar.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createKamar(req, res) {
  try {
    const result = await Kamar.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function updateKamar(req, res) {
  try {
    const { id } = req.params;
    const kamar = await Kamar.findByPk(id);
    if (!kamar) return res.status(404).json({ msg: "Kamar tidak ditemukan" });

    await Kamar.update(req.body, { where: { id } });
    return res.status(201).json({ msg: "Kamar berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteKamar(req, res) {
  try {
    const { id } = req.params;
    const kamar = await Kamar.findByPk(id);
    if (!kamar) return res.status(404).json({ msg: "Kamar tidak ditemukan" });

    await Kamar.destroy({ where: { id } });
    return res.status(201).json({ msg: "Kamar berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getKamar, createKamar, updateKamar, deleteKamar };
