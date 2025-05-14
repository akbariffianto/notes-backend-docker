import Notes from "../model/NoteModel.js";

const createNotes = async (req, res) => {
  const { judul, deskripsi, kategori } = req.body; 
  const user_id = req.user.user_id; 
  try {
    const notes = await Notes.create({
      judul,
      deskripsi,
      kategori,
      userId: user_id,
    });
    res.status(201).json({
      message: "Notes berhasil dibuat",
      userId: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  const user_id = req.user.user_id;

  try {
    const notes = await Notes.findAll({ where: { userId: user_id } });
    res.status(200).json({
      message: "Notes berhasil diambil",
      userId: user_id,
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
          userId: user_id,
        },
      }
    );
    res.status(200).json({
      message: "Notes berhasil diupdate",
      userId: user_id,
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
        userId: user_id, 
      },
    });
    res.status(200).json({
      message: "Notes berhasil dihapus",
      userId: user_id,
      data: notes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getNotes, createNotes, updateNotes, deleteNotes };
