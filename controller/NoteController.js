import Note from "../model/NoteModel.js";

// GET ALL NOTES
async function getNote(req, res) {
    try {
        const response = await Note.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

// CREATE NOTE
async function createNote(req, res) {
    try {
        const { judul, deskripsi, kategori } = req.body;

        // ✅ Validate required fields
        if (!judul || !deskripsi || !kategori) {
            return res.status(400).json({ msg: "Semua field harus diisi!" });
        }

        await Note.create({ judul, deskripsi, kategori });
        res.status(201).json({ msg: "Note Created" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

// UPDATE NOTE
const updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const { judul, deskripsi, kategori } = req.body;

        // ✅ Check if note exists
        const note = await Note.findOne({ where: { id } });
        if (!note) {
            return res.status(404).json({ msg: "Note tidak ditemukan" });
        }

        await Note.update({ judul, deskripsi, kategori }, { where: { id } });
        res.status(200).json({ msg: "Berhasil diupdate" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

// DELETE NOTE
const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;

        // ✅ Check if note exists
        const note = await Note.findOne({ where: { id } });
        if (!note) {
            return res.status(404).json({ msg: "Note tidak ditemukan" });
        }

        await Note.destroy({ where: { id } });
        res.status(200).json({ msg: "Berhasil dihapus" });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
};

export { getNote, createNote, updateNote, deleteNote };
