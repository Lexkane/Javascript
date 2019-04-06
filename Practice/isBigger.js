var a=-30;
var b=-20;
var t=Math.abs((a/b - ((a/b)%1)) + (a/b - ((a/Math.abs(b))%1)))*(a/b-1);
var c=Boolean(t);
console.log(c);