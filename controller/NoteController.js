import Notes from "../model/NoteModel.js";

const createNotes = async (req, res) => {
  const { judul, deskripsi, kategori } = req.body; 
  const user_id = req.user.user_id; 
  try {
    const notes = await Notes.create({
      judul,
      deskripsi,
      kategori,
      user_id: user_id,
    });
    res.status(201).json({
      message: "Notes berhasil dibuat",
      user_id: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  const user_id = req.user.user_id;

  try {
    const notes = await Notes.findAll({ where: { user_id: user_id } });
    res.status(200).json({
      message: "Notes berhasil diambil",
      user_id: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNotes = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.user_id;
  const { judul, deskripsi, kategori } = req.body;

  try {
    const notes = await Notes.update(
      {
        judul,
        deskripsi,
        kategori,
      },
      {
        where: {
          id,
          user_id: user_id,
        },
      }
    );
    res.status(200).json({
      message: "Notes berhasil diupdate",
      user_id: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.user_id;

  try {
    const notes = await Notes.destroy({
      where: {
        id,
        user_id: user_id, 
      },
    });
    res.status(200).json({
      message: "Notes berhasil dihapus",
      user_id: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getNotes, createNotes, updateNotes, deleteNotes };
