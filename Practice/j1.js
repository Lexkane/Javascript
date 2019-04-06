//let add=(a,b)=> {return a+b};
//console.log(add(7,3));

//let i=0;
//let names = [ 'david','eddie','alex', 'michael'];
//names.map((name)=>{ i++; console.log('howdy ${name}! ${i}'); } );

/*let third = ' 4,8,15,16,23,42';

let mySplit=third.split(',');
console.log(mySplit);

let first="Knowledge is power but enthsiams pulls the switch"

let mySlice=first.slice(13,19);
console.log(mySlice);

let mySubstr=first.substr(13,6);
console.log(mySubstr);

let myEndsWith= first.endsWith('switch');
console.log(myEndsWith);

let myStartsWith=first.startsWith("Know");
console.log(myStartsWith);

let myInclude=first.includes("but");
console.log(myInclude);

let myRepeat="H1!".repeat(3);
console.log(myRepeat); */


//let myTrim='   bloated   '
//console.log(myTrim.length);
//console.log(myTrim.trim(5).length);


let names=['david','eddie','mark'];

let fibonacci = [1,1,2,3,5,8,13,21];

//var filtered=fibonacci.filter((x) => {if (x<=15)return x;});
//console.log(filtered);
//console.log(filtered.every((num)=> num<10));
//console.log(filtered.every((num)=> num<16));

console.log(fibonacci.some((num)=> num >20));
console.log(fibonacci.some((num)=>num >100));