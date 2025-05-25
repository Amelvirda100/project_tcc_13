import RiwayatSewa from "../models/riwayatsewa_model.js";

async function getRiwayatSewa(req, res) {
  try {
    const result = await RiwayatSewa.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function createRiwayatSewa(req, res) {
  try {
    const result = await RiwayatSewa.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function updateRiwayatSewa(req, res) {
  try {
    const { id } = req.params;
    const sewa = await RiwayatSewa.findByPk(id);
    if (!sewa) return res.status(404).json({ msg: "Data sewa tidak ditemukan" });

    await RiwayatSewa.update(req.body, { where: { id } });
    return res.status(201).json({ msg: "Data sewa berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteRiwayatSewa(req, res) {
  try {
    const { id } = req.params;
    const sewa = await RiwayatSewa.findByPk(id);
    if (!sewa) return res.status(404).json({ msg: "Data sewa tidak ditemukan" });

    await RiwayatSewa.destroy({ where: { id } });
    return res.status(201).json({ msg: "Data sewa berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getRiwayatSewa, createRiwayatSewa, updateRiwayatSewa, deleteRiwayatSewa };
