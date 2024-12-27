// var tweet = prompt("enter the characters");
// var slicedContent = tweet.slice(0,140);
// alert(slicedContent)

// console.log((prompt("enter the characters").slice(0,140)));


// var myNamee = prompt("Enter your name");
// alert("Hello " + myNamee.charAt(0).toUpperCase() + String(myNamee).slice(1));

var myNamee = prompt("Enter your name");

var firstChar = myNamee.slice(0,1);

var capitalFirst = firstChar.toUpperCase();

var otherChar = (myNamee.slice(1, myNamee.length)).toLowerCase(); "r"

otherChar.toLowerCase();

var newName = capitalFirst + otherChar;
alert(newName)