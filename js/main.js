import $ from 'jquery';
// import _ from 'underscore';
// import allDetailsCollection from './allDetailsCollection';


import Router from './router';

import './ajaxSetup';

var appElement = $('.app');

var router = new Router(appElement);
router.start();

window.router = router;



