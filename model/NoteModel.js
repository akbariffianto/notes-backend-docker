import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Note = db.define("note", {
    judul: {
        type: Sequelize.STRING
    },
    deskripsi: {
        type: Sequelize.STRING
    },
    kategori: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
    timestamps: true, 
    underscored: true,
    createdAt: "tanggal_dibuat", 
    updatedAt: "tanggal_diperbarui"
});

export default Note;
