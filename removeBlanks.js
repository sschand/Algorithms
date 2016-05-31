/***********************************************************************************************************
RemoveBlanks: Create a function that, given a string, returns that string without blanks.
Given " play that Funky Music " return "playthatFunkyMusic"
***********************************************************************************************************/

function removeBlanks(str){
	  var newStr = '';
	  newStr = str.split(" ");	  
	  return newStr.join("");	
}

console.log(removeBlanks(" play that Funky Music "));