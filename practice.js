/*
// for loop : flags , boolean ,changing case
var countries=["india","united states", "united kingdom", "spain","portugal"] 
var countriesToCheck= "India"
countriesToCheck= countriesToCheck.toLowerCase();    // lowerCase() 
 var matchFound=false;
for (var i=0; i<countries.length;i++)
  for (var j=0; j<countriesToCheck.length;j++)
   if(countriesToCheck === countries[i]){
    matchFound=true;
    console.log("Economocally stable countries")
    break;
   }if(matchFound == false) {
    console.log("Unstable countries")
   }


// Nested loop
var firstName = ["shivaji","sambhaji","tanaji"]
var lastName = ["bhosale","killedar","jadhav"] 
var fullName=[]
 for (var i = 0; i<firstName.length;i++)
   for(var j = 0 ;j<lastName.length;j++)
  fullName.push(firstName[i]+lastName[j])
 console.log(fullName)


// slicing and changing case
 var string = "i love india"
 var firstChar = string.slice(0,1)
 console.log(firstChar)

 var otherChar =string.slice(1)
 console.log(otherChar)

 firstChar= firstChar.toUpperCase();
 otherChar= otherChar.toLowerCase();

 var modifiedString = firstChar + otherChar
 console.log(modifiedString)



 // to check double spaces in string (not running)

 var str = "swapnil killedar"
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 2) === " ") {
 console.log("No double spaces!");
 break;
}
 }

 // month abbreviation
 var month = "August"
 lengthOfMonth= month.length
 if(lengthOfMonth>3){
    var abr = month.slice(0,3)
    console.log(abr)
}
  
// finding & replacing segments

var segment = "world war II had happened in 1942"
for (var i=0; i<segment.length; i++){
    if(segment.slice(i,i+12) === "world war II" ){
segment = segment.slice(0,i) +"second world war" + segment.slice(i+12)

console.log(segment)
break;
}
}

//finding & replacing  segment with indexOf method
var segment = "in 1942 world war II has happened"

var firstChar = segment.indexOf("world war II")
  if (firstChar !== -1){
    segment = segment.slice(0, firstChar) + "second world war" + segment.slice(firstChar+12)
    console.log(segment)
  }
  

  // finding & replacing segment with looping
  var text = "To be or not to be.";
  for (var i =0; i<text.length ; i++){
     if(text.slice(i, i+2)=== "be"){
        text = text.slice(0,i) + "xyz" +text.slice(i+2)
        console.log(text)
     }
  }
  
  
// finding charatcer at location 

text = "how old are you?"
for (i=0 ; i<text.length; i++){
    if (text.charAt(i) === "?"){
        console.log("question mark is found")
    }
}

// replacing specific segment for all instance

var string = "my name is swapnil, name swapnil is given by my parents"
var newString = string.replace(/swapnil/g, "karna")
 console.log(newString)



 // rounding number 

 var number = "0.000001"
  var newNumber = Math.floor(number)
  console.log(newNumber)


  // simulate the throw of a die

  var number = Math.random()
  console.log(number)
  var impNum = (number*6)+1;
  var numOfStar = Math.round(impNum)
  console.log(numOfStar)
  


  // convert string in to numbers & decimals
  var result = parseFloat("2.3333")+150
  console.log(result)


  // convert string in to numbers & decimals num()

  var number ="24.225645"
  var newNum =Number(number)
  console.log(newNum)


  // convert number into a String

  var number =1234;
  var string = number.toString();
  console.log(string)


  // for dayNames

  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   var now = new Date();
  var theDay = now.getDay();
  var nameOfToday = dayNames[theDay];
  console.log(nameOfToday)
  

  // diff in time
var today = new Date()
var doomsDay = new Date ("August 15 ,2022")

var mstoday= today.getTime()
var doomTime = doomsDay.getTime()

var diff = mstoday-doomsDay

var dif = diff/ (1000 * 60 * 60 * 24);

var dif = Math.floor(dif)
console.log(dif)


// passing back data
function calcTot(merchTot) {
var orderTot;
if (merchTot >= 100) {
orderTot = merchTot;
}
else if (merchTot < 50.01) {
 orderTot = merchTot + 5;
 }
 else {
 orderTot = merchTot + 5 + (.03 * (merchTot - 50));
 }
 return orderTot;
 }
 var orederTot = calcTot(20);
 console.log(totalToCharge)*/


 //switch statement
  var dayOfWk;
  switch(dayOfWk) {
   case "Sat" :
  console.log("Whoopee");
   break;
   case "Sun" :
   console.log("Whoopee");
   break;
   case "Fri" :
   console.log("TGIF!");
   break;
   default :
   console.log("Shoot me now!");
   }