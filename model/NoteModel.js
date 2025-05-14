import { DataTypes } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define("note", {
  judul: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  deskripsi: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  kategori: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true
});

export default Notes;
