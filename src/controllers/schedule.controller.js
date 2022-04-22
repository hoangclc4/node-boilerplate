const os = require('os');
const path = require('path');
const ejs = require('ejs');
const { v4: uuidv4 } = require('uuid');
const { writeFile, unlink } = require('fs').promises;

// const httpStatus = require('http-status');
// const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
// throw new ApiError(httpStatus.NOT_FOUND, 'User not found');

const createTask = catchAsync(async (req, res) => {
  const { body } = req;
  console.log(body);
  if (!body.id || !body.cmd || !body.arguments || !body.starting_time || !body.frequency_type)
    throw Error('Missing default');

  const tempFile = path.join(os.tmpdir(), uuidv4());

  res.send(tempFile);
});

module.exports = {
  createTask,
};
