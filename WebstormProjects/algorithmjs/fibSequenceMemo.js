/**
 * Created by justinwang on 6/12/15.
 */

var fibSequence = "";

var memoize = function (f) {

    //var memo = [];

    var fm = function (i) {

        if (memo[i]) return memo[i];
        result = f(i);
        memo[i] = result;

        return result;
    }

    return fm;

}

var mfib = memoize(function (i) {

    if (i < 2)
        return 1;

    return mfib(i-1) + mfib(i-2);

});

