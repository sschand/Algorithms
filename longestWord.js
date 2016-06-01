/*
Create a function that, given a string of words returns the longest word. Example: given "Snap crackle pop makes the world go round!"
return "crackle"
*/

function longestWord(str){
	if(typeof str !== "string"){
		return "";
	}

	var wordArr = stringToWordArray(str);

	var longWord = "";

	for(var i = 0; i < wordArr.length; i++){
		if(wordArr[i].length > longWord.length){
			longWord = wordArr[i];
		}
	}
	return longWord;
}

function stringToWordArray(str){
	if(typeof str !== "string"){
		return [];
	}

	var wordArr = [];
	word = "";

	for(var i = 0; i < str.length; i++){
		if(str[i] == " " || str[i] == "\t" || str[i] == "\n"){
			if(word.length){
				wordArr.push(word);
				word = "";
			}
		} else {
			word += str[i];
		}
	}

	if(word.length){
		wordArr.push(word);
	}

	return wordArr;
}


console.log(longestWord("Snap crackle pop makes the world go round!"));