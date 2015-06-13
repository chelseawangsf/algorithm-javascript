/**
 * Created by justinwang on 6/12/15.
 */
function greaterThan(n) {
    return function(m) {return m > n;};
}

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(9));