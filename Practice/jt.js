/* var  counter= (function(){

let count=0;
function print(message){
    console.log(message+"---"+count);
}

return{
    value:count,
    increment:functon(){
        count+=1;
        print('After increment:');
    },
    reset:function(){
        print:('Before reset:');
        count=0;
        print('After reset:');
    }

 
    }  
}
)();

//console.log(counter.count);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value);
counter.reset();
 */

 /* function first(){

    return this;

 }
 console.log(first()===global);

 function second(){
     'use strict';
     return this;
 }

 console.log(second()==global);
 console.log(second()===undefined);

 let myObject={ value:"My Object"};

 global.value="Global object";

 function third(){

    ruturn this.value+name;
 }
 console.log(third());

 console.log(third.call(myObject));
 console.log(third.apply(myObject,)) */

 /* function getReasonCount(){ return 1;}
 let interpolation='Give me' ${(getReasonCount()==1)? 'one good reason' }:'a few reasons'} to try'
 console.log(interpolation); */

 /* let pattern=/xyz/;

 let value='This is xyz pattern';

 //console.log(value.replace(pattern,'just'));
 console.log(value.match(pattern));
 var match =value.match(pattern); */

 let myNumber=new Number(7);
 console.log(typeof myNumber);
 let myPrimitive=myNumber.valueOf();
 console.log(typeof myPrimitive);