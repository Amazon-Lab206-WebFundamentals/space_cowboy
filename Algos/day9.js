// Finding optimal change returned as object

function find(num){
    var coins = {Quarters: 0, Dimes: 0, Nickels: 0, Pennies: 0};

    coins.Quarters = Math.floor(num/25);
    temp = num % 25;
    coins.Dimes = Math.floor(temp/10);
    temp = temp % 10;
    coins.Nickels = Math.floor(temp/5);
    temp = temp % 5;
    coins.Pennies = temp;
    return coins;
}

console.log(find(117));


// parentheses valid that can be any {[()]}

