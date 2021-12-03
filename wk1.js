function greet(userName) {
    if (userName === "Steve"){
       var greeting = " here, AKA the Stevenator, just wanted to say Hello World";
    } else {
        var greeting = " here, just wanted to say Hello World";
    }
    // console.log(`${userName} ${greeting}`);
    return userName + greeting;
}

console.log(greet("Steve"));
console.log(greet("Nathan"));
console.log(greet(666));