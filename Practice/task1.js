var _price = prompt("What's cost?");
var _discount = prompt("What's discount?");
var price=parseFloat(_price);
var discount=parseFloat(_discount);
var new_price =price-(price*discount/100);
var saved = price*discount/100;
const epsilon=0.009;

if (price>=0 && (discount>=0 && discount<=100))
{    
    if  (price % 1< epsilon) {price=Math.trunc(price);}
        else { price=parseFloat(Math.round(price * 100) / 100).toFixed(2);
              if  (price % 1< epsilon) {price=Math.trunc(price);}
             } 
    
    if (discount % 1< epsilon) {discount=Math.trunc(discount);}
        else {discount=parseFloat(Math.round(discount * 100) / 100).toFixed(2);
              if (discount % 1< epsilon) {discount=Math.trunc(discount);}
             }

    if (new_price % 1<epsilon) {new_price=Math.trunc(new_price);}
         else {new_price=parseFloat(Math.round(new_price * 100) / 100).toFixed(2);
               if (new_price % 1<epsilon) {new_price=Math.trunc(new_price);}
              }

    if (saved % 1 <epsilon) {saved=Math.trunc(saved); }
         else  {saved=parseFloat(Math.round(saved * 100) / 100).toFixed(2);
               if (saved % 1 <epsilon) {saved=Math.trunc(saved); }
               }
       
          
    
    
  console.log(" Price without discount:"+ price +'\n' ,
          "Discount:"+ discount + "%"+'\n' ,
        "Price with discount:"+ new_price+'\n' ,
      "Saved:" + saved + '\n' );
}

else console.log("Invalid data");
