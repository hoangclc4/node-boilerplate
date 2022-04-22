const express = require('express');
const defaultRoute = require('./defalt.route');
const scheduleRoute = require('./schedule.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: defaultRoute,
  },
  {
    path: '/schedule',
    route: scheduleRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
