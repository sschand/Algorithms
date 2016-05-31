/************************************************************************************************************
ParensBracesBrackets Valid: Create a function that, given an input string, returns a boolean whether the 
various parentheses, braces and brackets in that string are valid. Given an input string of 
"w(a{t}s[o(n{c}o)m]e)h[e{r}e]!​", return true. Given the input string "d(i{a}l[t]o)n{e​", return false. 
Given the "a(1)s[O(n]0{t)0}k​", return false.
************************************************************************************************************/

function BracesValid(str){
	var check = [];
	
	for(var i = 0; i < str.length; i++){
		switch(str[i]){
			case '{':
				check.push('}');
				break;
			case '(':
				check.push(')');
				break;
			case '[':
				check.push(']');
				break;
			case '}':
			case ']':
			case ')':
				if(check[check.length - 1] == str[i]){
					check.pop();
				} 
				break;
		}		
	}
	if(check.length === 0){
		return true;
	}else{
		return false;
	}
}

console.log(BracesValid('w(a{t}s[o(n{c}o)m]e)h[e{r}e]!'));