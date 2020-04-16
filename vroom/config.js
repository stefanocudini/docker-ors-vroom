const minimist = require('minimist');

const TIMEOUT = 5 * 60 * 1000; // eslint-disable-line
const MAX_JOBS = 1000;
const MAX_VEHICLES = 200;
const MAX_REQUEST_SIZE = '1mb';
const PORT = 8081;
const LOG_DIR = __dirname + '/..';
//const ROUTER = 'osrm';
const ROUTER = 'ors';

// Config variables.
const cliArgs = minimist(process.argv.slice(2), {
  alias: {
    p: 'port', // eslint-disable-line
    r: 'router', // eslint-disable-line
  },
  boolean: ['geometry', 'override'],
  default: {
    geometry: true, // retrieve geometry (-g)
    limit: MAX_REQUEST_SIZE, // max request size
    logdir: LOG_DIR, // put logs in there
    maxjobs: MAX_JOBS, // max number of jobs
    maxvehicles: MAX_VEHICLES, // max number of vehicles
    override: true, // allow cl option override (-g only so far)
    path: '', // VROOM path (if not in $PATH)
    port: PORT, // expressjs port
    router: ROUTER, // routing backend (osrm, libosrm or ors)
    timeout: TIMEOUT // milli-seconds.
  }
});

// For each routing profile add a host and a port for use with osrm
// and ors.
var orshost = 'ors';
var orsport = '8080';
//testing in localhost
//var orshost = '192.168.1.7';
//var orsport = '9000';

const routingServers = {
  'driving-car': {
    host: orshost,
    port: orsport
  },
  'driving-hgv': {
    host: orshost,
    port: orsport
  },
  'hgv': {
    host: orshost,
    port: orsport
  },   
  'car': {
    host: orshost,
    port: orsport
  }
};

const VROOM_OK_CODE = 0;
const VROOM_INTERNALERROR_CODE = 1;
const VROOM_INPUTERROR_CODE = 2;
const VROOM_ROUTINGERROR_CODE = 3;
const VROOM_TOOLARGE_CODE = 4;

// Hard-code error codes 1, 2 and 3 as defined in vroom. Add 4 code
// for size checks.
const vroomErrorCodes = {
  input: VROOM_INPUTERROR_CODE,
  internal: VROOM_INTERNALERROR_CODE,
  ok: VROOM_OK_CODE,
  routing: VROOM_ROUTINGERROR_CODE,
  tooLarge: VROOM_TOOLARGE_CODE
};

module.exports = {
  cliArgs: cliArgs,
  routingServers: routingServers,
  vroomErrorCodes: vroomErrorCodes
};
