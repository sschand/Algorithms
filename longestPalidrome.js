/************************************************************************************************************
Longest Palindrome: For this challenge, we will loop not only at the entire string, but also substrings 
within it.

For a string, return the longest palindromic substring. Given "what up, dada?", return "dad". Given "not much",
return "n". Include spaces as well: give "My favorite racecar erupted!", retunr "e racecar e"
************************************************************************************************************/

function longestPal(str){
    var longestPal = "";
  
    for(var i = 0; i < str.length; i++){
        for(var j = str.length - 1; j > i; j--){
            if(str[i] == str[j]){
                var temp = str.slice(i, j+1);
                if(isPalindrome(temp)){
                    if(temp.length > str.length/2){
                        return temp;
                    }
                    
                    if(temp.length > longestPal){
                        longestPal = temp;
                    }
                }
            }
        }
    }
  
    if(longestPal != ""){
        return longestPal;
    }else{
        return "No palindromes found.";
    }
}

function isPalindrome(temp){
    var mid = Math.floor(temp.length/2);
    var i = 0;
    
    while (i < mid){
        if(temp[i] == temp[temp.length -1 - i]){
            i++;
        }else{
            return false;
        }
    }
  
    return true;
}

console.log(longestPal("madam m Adam"));