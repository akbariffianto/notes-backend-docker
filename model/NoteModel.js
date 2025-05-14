import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define(
  "note",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    judul: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    deskripsi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    kategori: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    underscored: true,
    createdAt: "tanggal_dibuat",
    updatedAt: "tanggal_diperbarui",
  }
);

Notes.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Notes, { foreignKey: "user_id" });

export default Notes;
