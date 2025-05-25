import Pembayaran from "../models/pembayaran_model.js";

async function getPembayaran(req, res) {
  try {
    const result = await Pembayaran.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function createPembayaran(req, res) {
  try {
    const result = await Pembayaran.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function updatePembayaran(req, res) {
  try {
    const { id } = req.params;
    const pembayaran = await Pembayaran.findByPk(id);
    if (!pembayaran) return res.status(404).json({ msg: "Data tidak ditemukan" });

    await Pembayaran.update(req.body, { where: { id } });
    return res.status(201).json({ msg: "Data pembayaran berhasil diupdate" });
  } catch (error) {
    console.log(error.message);
  }
}

async function deletePembayaran(req, res) {
  try {
    const { id } = req.params;
    const pembayaran = await Pembayaran.findByPk(id);
    if (!pembayaran) return res.status(404).json({ msg: "Data tidak ditemukan" });

    await Pembayaran.destroy({ where: { id } });
    return res.status(201).json({ msg: "Data pembayaran berhasil dihapus" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getPembayaran, createPembayaran, updatePembayaran, deletePembayaran };
