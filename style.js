/* 1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.*/

    /*var nameLength = prompt ("What is your name?");
    window.alert(nameLength.length);*/

/*2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.*/

    /*var userName = prompt ("What is your name?");
    var userNumber = prompt ("Please pick a number, less than the number of letters in your name.")
    window.alert(userName.charAt(userNumber - 1));*/

/*3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.*/

    /*var firstName = prompt("What is your first name?");
    var lastName = prompt("What is your last name?");
    window.alert("Your name is " + firstName + " " + lastName);*/

/*4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.*/

    /*var sentence = ("The quick brown fox jumps over the lazy dog");
    window.alert(sentence.indexOf("fox"));*/

/*5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.*/

    /*var sentence = ("The quick brown fox jumps over the lazy fox");
    window.alert(sentence.lastIndexOf("fox"));*/

/*6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.*/

    /*var sentence = ("The quick brown fox jumps over the lazy dog");
    var fullName = prompt("What is your full name?");
    console.log(sentence.replace("the lazy dog", fullName));*/

/*7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.*/

    /*var userWord = prompt("Please enter a word.");
    switch (userWord){
	case "The":
    alert("Your word is The");
		break;
	case "quick":
	alert("Your word is quick");
		break;
	case "brown":
	alert ("Your work is brown.");
		break;
	case "fox":
	alert ("Your word is fox.");
		break;
	case "jumps":
	alert ("Your word is jumps.");
		break;
	case "over":
	alert ("Your word is over.");
		break;
	case "the":
	alert ("Your word is the.");
		break;
	case "lazy":
	alert ("Your word is lazy.");
		break;
	case "dog":
	alert ("Your word is dog.");
		break;
 default: alert("Your word was not found.")
}*/
	
/* Step 8:	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.*/

	/*var old_string = "The quick brown fox jumps over the lazy dog.";
	var new_string = old_string.substring(31, 43);
	alert(new_string.toUpperCase());*/

/*9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.*/

    /*var sentence = ("      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG      ");  
    var sentence = (sentence.trim());
	alert(sentence.toLowerCase());*/

/*10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.*/

    /*var sentence = "the quick brown fox jumps over the lazy dog.";
    var newSentence = (sentence.slice(1,44));
    var capLetter = (sentence.slice(0,1));

    var capLetter = (capLetter.toUpperCase());
    alert(capLetter + newSentence);*/

//Assignment 2, 2
//Part 1 - Math

/*1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.*/

        /*var userNumber = prompt("Please pick a number.");
        console.log(Math.abs(userNumber));*/
    
/*2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.*/

        /*var userNumber = prompt("Please pick a decimal number.");
        console.log(Math.ceil(userNumber));*/

/*3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.*/

        /*var userNumber = prompt("Please pick a decimal number.");
       console.log(Math.floor(userNumber));*/

/*4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.*/
	/*var n = prompt("Pick a number");
	var n1 = prompt("Pick another number");
	var n2 = prompt("Pick another number");
	var n3 = prompt("Pick another number");
	var n4 = prompt("Pick one last number");
	console.log(Number(n) + ", " + Number(n1) + ", " + Number(n2) + ", " + Number(n3) + ", " + Number(n4));
	console.log(Math.min(n, n1, n2, n3, n4));
	console.log(Math.max(n, n1, n2, n3, n4));*/
        

/*5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. */

        /*var userNumber = prompt ("Please pick a number.");
        console.log(Math.sqrt(userNumber));*/

//Part 2 Date and Date Functions

//6.	Create an application that gets the current date. Display that result within the console window.

        /*var d = new Date();
       console.log(d.getDate());*/
        
//7.	Create an application that gets the number of days in a month. Display that result within the console window.
	
	/*var d =  new Date();
	var m =  (d.getMonth());
		if (m === 0 || m === 2 || m === 4 || m === 6 || m === 7 || m === 9 || m === 11) {
		console.log("The month has 31 days");
		}	else if (m === 3 || m === 5 || m === 8 || m === 10) {
		console.log("The month has 30 days");
		}	else {
		console.log("The month has 28 days");
		}*/
		

//8.	Create an application that gets the month name from a particular date. Display that result within the console window.

	/*var d = new Date();
	var m = d.getMonth();
		if (m === 0) {
		console.log("January");
		}	else if (m === 1) {
		console.log("February");
		}	else if (m === 2) {
		console.log("March");
		}	else if (m === 3) {
		console.log("April");
		}	else if (m === 4) {
		console.log("May");
		}	else if (m === 5) {
		console.log("June");
		}	else if (m === 6) {
		console.log("July");
		}	else if (m === 7) {
		console.log("August");}
		else if (m === 8) {
		console.log("September");}
		else if (m === 9) {
		console.log("Otober");}
		else if (m === 10) {
		console.log("November");}
		else{
		console.log("December");
		}*/

//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.

    /* var d = new Date();
        var weekend = d.getDay();
      if (weekend == 6){
                console.log("Today is Saturday.");
            }  else if (weekend == 0) {
                console.log("Today is Sunday.");
            } else {
                console.log("Today is not a weekend.");
            }*/

/*10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.*/
        /*var d = new Date();
        var today = d.getDay();
        var yesterday = (today -1);
              if (yesterday == 0){
                alert("Sunday");
            } else if (yesterday == 1){
                alert("Monday");
            } else if (yesterday == 2){
                alert("Tuesday");
            } else if (yesterday == 3){
                alert("Wednesday");
            } else if (yesterday == 4 {
                alert("Thursday");
            } else if (yesterday == 5{
                alert("Friday");           
            } else {
                alert("Saturday");
            }*/
            

/*11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.*/
        /*var d = new Date();
        var today = d.getDay();
            if (today == 0){
                alert("S");
            } else if (today == 1){
                alert("M");
            } else if (today == 2){
                alert("T");
            } else if (today == 3){
                alert("W");
            } else if (today == 4) {
                alert("T");
            } else if (today == 5){
                alert("F");           
            } else {
                alert("S");
            }*/

//Part 3 - Conditional Logic and Looping Operations
/*12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.*/

  /*var firstNum = prompt("Please pick a number."); 
    var secondNum = prompt("Please pick a number."); 
    if (firstNum >= secondNum){
        console.log(firstNum);
		}	else{
        console.log(secondNum);
        };*/

/*13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. */

//My code doesn't work, I think I'm on the right track, but can't figure out where I'm going wrong.  
/*var nameFirst = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"];
	for(var x in nameFirst){
		console.log(nameFirst[x]);
	}
var grade = [80, 77, 88, 95, 68];
	for(var x in grade){
		console.log(grade[x]);
	}

switch (grade) {
	case (grade < 60):
  console.log(name + ":  F");
	break;
	case (grade <70):
  console.log(name + ":  D");
	break;
	case (grade < 80):
    window.console.log(name + ":  C");
	break;
	case (grade < 90):
    window.console.log(name + ":  B");
	break;
	default:
    window.console.log(name + ":  A");
}*/
	
/*14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.*/
	/*for (x = 1; x <= 15; x++){
			if (x % 2===0){
			console.log(x + " is an even number");
			}
			else{
			console.log(x + " is an odd number");
			}
			}*/

/*15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.*/
/*var x;
    for (x = 1; x <= 100; x++) {
		if (x % 15 === 0) {
            console.log ("FizzBuzz<br>");
			continue;
        }; 
	
        if (x % 3 === 0) {
            console.log ("Fizz<br>");
			continue;
        };  
		
        if (x % 5 === 0) {
            console.log ("Buzz<br>");
			continue;
        };  
        console.log (x + "<br>");
    }*/

//Part 4 Hitchhiker's Guide Game
	/*var x = confirm("Are you ready to play The Hitchhiker's Guide to the Galaxy?");
			if(x){
			alert("Awesome, our hero is waiting!");
			}
			else{
			alert("Too bad, we're going to play anyway, because our hero desperately needs your help!");
			}
		alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera.  You are disoriented, lost, hungry  and extremely thristy.  You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left.  Your back is against the wall...");	
		var x = prompt("Which direction would you like to head (please enter forward, left or right).");
			switch(x){
				case "forward":
					alert("You walk about 100 yards and safely make your way out of the cave.");
					break;
				case "left":
					alert("Your thirst has gotten the better of you.  You trip on a rock, hit your head, and fall into a pool of water and drown.");
					break;
				case "right":
					alert("You found the gold!  You walk into a small room and see thoughts of gold coins, jewels, chalices, and more. You jump into the piles of gold in celebrations and immediately a hidden door slams down and traps you in the room forever.");
					break;
				default:
					alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option....loser.");
			}*/

//Part 5 Coin Flip Game
		/*var choice = prompt("Please pick Heads or Tails.");
		var coinFlip = Math.round(Math.random());
		var x = choice.toLowerCase();
					
		if(x=="heads" && coinFlip==0){
			alert("The flip was heads and you chose heads. . . you win!");
		}	
			if(x=="tails" && coinFlip==0){
			alert("The flip was heads but you chose tails, you lose!");}
			if(x=="heads" && coinFlip==1){
			result = alert("The flip was tails but you chose heads, you lose.");
		}	else{
			result = alert ("The flip was tails and you chose tails. . . you win!");
			}*/

//Part 6 Coin Flip Redux
		/*var coinFlip;
		for(i = 1; i<=10; i++){
			coinFlip = Math.round(Math.random());
			if(coinFlip==0){
				console.log("heads");
			} else {
				console.log("tails");	
			}
		}*/

//Part 7 Coin Flip Streak
		/*var coinFlip;
		do{
			coinFlip = Math.round(Math.random());
			if (coinFlip==0){
			console.log("heads");
			}
		}
				
			while(coinFlip==0);
			console.log("tails");*/
			

//Part 8 Looping a Triangle
	/*var i = 0;
	var note = (" ");
	while (i < 7) {
		window.console.log(note += "#");
		i++;
		}*/

//Part 9 Odd or Even
	/*for (x = 1; x <= 15; x++){
			if (x % 2===0){
			console.log(x + " is an even number");
			}
			else{
			console.log(x + " is an odd number");
			}
			}*/




















