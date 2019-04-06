//function findType(a) { return typeof(a);}


var a= [1,5,8]

function forEach (a){
    var output="";
 for (let i = 0; i < a.length; i++) 
    {  
        output+=a[i]+" ";
        }
     console.log(output);
} 

function Transform (a,b){
    var output="";
 for (let i = 0; i < a.length; i++) 
    {  
        output+=a[i]+" ";
        }
     console.log(output);
}
forEach(a);

//forEach ([2,5,8], function(el){return el.forEach;}) { console.log(el); })