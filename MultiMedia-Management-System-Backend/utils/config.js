const config = {
  db: {
    host: "localhost",
    user: "root",
    password: "IITKGP@692",
    database: "multimediadb",
    port: 3306,
  }
};

const jwtSecret = "secret";

module.exports.config = config;
module.exports.jwtSecret = jwtSecret;
