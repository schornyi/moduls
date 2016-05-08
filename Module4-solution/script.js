var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (var i = 0; i < names.length; i++) {

	var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 'j') {
    //console.log("Good Bye " + names[i] + "<br>");
	document.write("Good Bye " + names[i] + "<br>"); 
	} 
  
	else {
    //console.log("Hello " + names[i] + "<br>");
	document.write("Hello " + names[i] + "<br>"); 
	}

	}
