var config = {
    username: 'emailaddress',
    password: 'password'
};

var verisureApi = require('./verisure-api').setup( config );

// alarm state changes
verisureApi.on( 'climateChange', log );

function log ( data ) {
console.log( data );
process.exit(1);
}