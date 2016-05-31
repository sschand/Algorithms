/************************************************************************************************************
ParensValid: Create a function that, given an input string, returns a boolean whether parentheses in that 
string are valid. Given an input of "y(3(p)p(3)r)s​", return true. Given "n(0(p)3​", return false. 
Given "n)0(t(0)k​", return false.
***********************************************************************************************************/

function ParensValid(str){
	var count_open = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] == '('){
			count_open++;
		}else if(str[i] == ')'){
			count_open--;
		}
	}
	
	if(count_open == 0){
		return true;
	}else{
		return false;
	}
}

console.log(ParensValid('n(0(p)3'));