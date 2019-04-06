
var senseOfLife = 42;

function showVariable ( otherSenseOfLife) {
  //var otherSenseOfLife;
    /* ваш код тут */
   
    if (!otherSenseOfLife)  {return senseOfLife;}
    else {return otherSenseOfLife;}
}

console.log(showVariable(6));
console.log(showVariable());
