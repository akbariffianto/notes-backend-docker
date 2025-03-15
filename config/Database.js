import { Sequelize } from "sequelize";

const db = new Sequelize("notes", "root", "", {
    host: "34.135.240.157",
    dialect: "mysql",
    timezone: "+07:00", // Set timezone ke GMT+7
    dialectOptions: {
        dateStrings: true, // Pastikan tanggal dikembalikan dalam bentuk string
        typeCast: function (field, next) { // Konversi otomatis untuk timestamps
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        },
    },
    logging: false // Matikan logging jika tidak diperlukan
});

export default db;
