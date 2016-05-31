/************************************************************************************************************
Acronyms: Creata function that, given a string, returns the string's acronym (first letter only, capitalized). 
Given "there's no free lunch - gotta pay yer way", return "TNFL-GPYW". 
Given "Live from New York, it's Saturday Night!" you should return "LFNYISN";
************************************************************************************************************/

function acronyms(str){
	  var newStr = '';
	  for(var i = -1; i < str.length; i++){
			if(i == -1 || str[i] == " "){
				//if(str[i+1] == "-"){
				//	newStr +="-";
				//}else{
					newStr += str[i+1].toUpperCase();
				//}
			}
		}
	return newStr;
}

console.log(acronyms("there's no free lunch - gotta pay yer way"));