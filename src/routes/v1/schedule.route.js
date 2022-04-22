const express = require('express');
const validate = require('../../middlewares/validate');
const scheduleController = require('../../controllers/schedule.controller');

const router = express.Router();

router.route('/').post(validate(scheduleController.createTask), scheduleController.createTask);

// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;
