/************************************************************************************************************
Is Palindrom: Strings like "Able was I, ere I saw Elba" or "Madam, I'm Adam" could be considered palindromes, 
because (if we ignore spaces, punctuation and capitalization) the letters are the same from front and back

Create a function that returns a boolean whether the string is a strict palindrom. For "a x a" or "racecar", 
return true. Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!", return false.
************************************************************************************************************/

function isPalindrome(str){
    var mid = Math.floor(str.length/2);
    var i = 0;
    
    while (i < mid){
        if(str[i] == str[str.length -1 - i]){
            i++;
        }else{
            return false;
        }
    }
  
    return true;
}

console.log(isPalindrome("race car"));