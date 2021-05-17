'use strict';

const fetch = require('node-fetch');
const Bluebird = require('bluebird');


if ( !global.fetch ) {
    fetch.Promise = Bluebird;
    global.fetch = fetch;
}