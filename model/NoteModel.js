import { DataTypes } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

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

Notes.belongsTo(Users, { foreignKey: "user_id" });
Users.hasMany(Notes, { foreignKey: "user_id" });

export default Notes;
