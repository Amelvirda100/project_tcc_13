import Penyewa from "../models/penyewa.js";

async function getPenyewa(req, res) {
  try {
    const result = await Penyewa.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function createPenyewa(req, res) {
  try {
    const result = await Penyewa.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function updatePenyewa(req, res) {
  try {
    const { id } = req.params;
    const penyewa = await Penyewa.findByPk(id);
    if (!penyewa) return res.status(404).json({ msg: "Penyewa tidak ditemukan" });

    await Penyewa.update(req.body, { where: { id } });
    return res.status(201).json({ msg: "Penyewa berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deletePenyewa(req, res) {
  try {
    const { id } = req.params;
    const penyewa = await Penyewa.findByPk(id);
    if (!penyewa) return res.status(404).json({ msg: "Penyewa tidak ditemukan" });

    await Penyewa.destroy({ where: { id } });
    return res.status(201).json({ msg: "Penyewa berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getPenyewa, createPenyewa, updatePenyewa, deletePenyewa };
