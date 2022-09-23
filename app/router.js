'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/test_keywords', controller.home.test_keywords);
  router.get('/test_flykeywords', controller.home.test_flykeywords);

};
