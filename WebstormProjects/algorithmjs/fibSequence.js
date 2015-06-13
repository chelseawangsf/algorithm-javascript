/**
 * Created by justinwang on 6/12/15.
 */


function Fibonacci() {

    this.looping = function(n) {
        var a = 0, b = 1, f = 1;
        for (var i = 2; i <= n; i++) {
            f = a + b;
            a = b;
            b = f;

        }
        return f;

    };

    this.recursive = function(n) {
      if (n <= 2) {
          return 1;
      } else {
          return this.recursive(n - 1) + this.recursive(n - 2);
      }

    };

}


var f = new Fibonacci();
var fibSequence = "";
for (var i=1; i<= 15; i++) {
    fibSequence += f.looping(i) + " ";

}
console.log(fibSequence);

fibSequence = "";
for (var i=1; i<=15; i++) {
    fibSequence += f.recursive(i) + " ";
}
console.log(fibSequence);