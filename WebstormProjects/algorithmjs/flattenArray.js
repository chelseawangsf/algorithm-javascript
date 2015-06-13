/**
 * Created by justinwang on 6/12/15.
 */

var array = [[22,23],[1], [23434,34,5]];



console.log(array.reduce(function(flat, current) {
    return flat.concat(current);
}));