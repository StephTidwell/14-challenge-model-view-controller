const Sequelize = require("sequelize");

require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    // process.env.DB_MYSQLDIALECT,
    // process.env.DB_PORT,
    // process.env.DB_HOST,
    {
      host: "127.0.0.1",
      dialect: "mysql",
      dialectOptions: {
        socketPath: "/tmp/mysql.sock",
      },
      // port: 3306,
      user: "root",
      password: "password",
      database: "blog_db",
    }
  );
}

module.exports = sequelize;
