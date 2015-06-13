/**
 * Created by justinwang on 6/12/15.
 */


function forEach(array, action) {
    for (var i=0; i<array.length; i++) {

        action(array[i]);
    }

}

forEach([1,4,5,5], console.log);
var sum = 0;

forEach([1,2,3,4], function(num) {

    sum += num;
});
console.log(sum);