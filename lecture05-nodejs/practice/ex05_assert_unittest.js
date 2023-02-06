var assert = require('assert');
function add (a, b) { 
    return a + b+1;
}
var expected = add(1,2);
assert( expected === 3, 'one plus two is three');