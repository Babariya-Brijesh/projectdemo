const pool = require("../config/database");

module.exports = {
  dataFunction: (skip,limit) => {
    return new Promise((resolve, reject) => {
      console.log("skipskip======>>>",skip)
      pool.query(
        `SELECT * FROM dummy LIMIT ${skip}, ${limit}`,
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          return resolve(results);
        }
      );
    });
  },
};
