function count(num1, num2, mark) {
    if ((parseInt("0" + num1, 10) > 0) && (parseInt("0" + num2, 10) > 0)) {
        if (mark == "+") {
            return num1 + num2;
        }
        else if (mark == "-") {
            return num1 - num2;
        }
        else if (mark == "*") {
            return num1 * num2;
        }
        else if (mark == "/") {
            if (num2 == 0) {
                return "division by 0 error";
            }
            else {
                return num1 / num2;
            }
        }
        else {
            return "invalid mark";
        }
    }
    else {
        return "invalid num1 or num2";
    }
}

//console.log(count(1,2,"+"));
//console.log(count(1,2,"-"));
//console.log(count(1,2,"*"));
//console.log(count(1,2,"/"));
console.log(count(1,1,"/"));
