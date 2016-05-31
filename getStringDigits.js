/************************************************************************************************************
GetStringDigits: Create a JS function that, given a string, returns the integer made from that string's digits. 
So, given an input string of "0s1a3y5w7h9a2t4?6!8?0", return 1357924680
************************************************************************************************************/

function getStringDigits(str){
	  var newStr = '';
	  var stringDigits = "0123456789";
	
	  for(var i = 0; i < str.length; i++){
			for(var j = 0; j < stringDigits.length; j++){
				
				if(stringDigits[j] == str[i]){
					newStr += str[i];
				}
			}
		}
	  return parseInt(newStr);
}

console.log(getStringDigits("0s1a3y5w7h9a2t4?6!8?0"));