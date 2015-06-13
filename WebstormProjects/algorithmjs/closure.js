/**
 * Created by justinwang on 6/12/15.
 */
function multiplier(n) {
    return function(number) {
        return n * number;
    };

}

console.log(multiplier(2)(5));

