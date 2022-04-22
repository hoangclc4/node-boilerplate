const express = require('express');

const router = express.Router();

router.route('/').get((req, res) => {
  return res.send();
});

module.exports = router;
