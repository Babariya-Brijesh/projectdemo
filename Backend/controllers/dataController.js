const { dataFunction } = require("../service/dataService");

exports.sendData = async (req, res, next) => {
  const skip = req.query.skip;
  const limit = req.query.limit;
  try {
    const result = await dataFunction(skip, limit);
    return res.status(200).json(result);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    next(error);
  }
};
