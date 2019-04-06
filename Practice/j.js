var price = prompt("What's cost?");
var discount = prompt("What's discount?");
var new_price = price-(price*discount/100);
var saved = price*discount/100;


if (price>=0 && (discount>=0 && discount<=100))

{console.log(" Price without discount:",price+'\n' ,
          "Discount:",discount,"%"+'\n' ,
        "Price with discount:",new_price+'\n' ,
      "Saved:",saved,'\n' );}

else console.log("Invalid data");
