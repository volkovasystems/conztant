
const assert = require( "assert" );
const conztant = require( "./conztant.js" );

assert.equal( conztant( "hello world" ), false, "should return false" );
assert.equal( conztant( "HELLO_WORLD" ), true, "should return true" );

console.log( "ok" );
