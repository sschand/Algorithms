/*
Discard all repeated words
Given "Sing! Since a  sont; sing out loud, sing out strong" return "Sing! Sing a song; loud; strong"
*/

function uniqueWords(str){
	if(typeof str !== "string"){
		return "";
	}

	var i; 
	var uniqWords = "";
	words = {};
	var wordArr = stringToWordArray(str);

	for(i = 0; i < wordArr.length; i++){
		if(words[wordArr[i]] === undefined){
			words[wordArr[i]] = 0;
		}
		words[wordArr[i]]++;
	}


	for(i = 0; i < wordArr.length; i++){
		if(words[wordArr[i]] === 1){
			if(uniqWords.length > 0){
				uniqWords += " ";
			}
			uniqWords += wordArr[i];
		}
	}
	return uniqWords;
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


console.log(uniqueWords("Sing! Sing a song; sing out loud, sing out strong"));