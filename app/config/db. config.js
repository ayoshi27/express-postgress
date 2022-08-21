module.exports = {
  HOST: "localhost",
  PORT: 5432,
  USER: "admin",
  PASSWORD: "Fgprs339",
  DB: "tutorial",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}