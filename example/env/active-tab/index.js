// process.env.REMPL_SERVER = 'host:1234';

var rempl = require('../../../src');

rempl.createPublisher('env-active-tab', rempl.scriptFromFile(__dirname + '/ui.js'));
