let city=window.prompt("Enter your city");
let discount=0;
let discountList={
"Lviv":10,
"Kyiv":3,
"Sykhiv":1
}

if (discountList[city])
{
    discount=discountList[city];
}
console.log(discount);