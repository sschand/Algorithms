function getMapped (str) {
  var mapped = {};

  if(str.length === 0) {
    return mapped;
  }

  for(var i = 0; i < str.length; i++) {
    if(mapped[str[i]] === undefined) {
      mapped[str[i]] = 1;
    } else {
      mapped[str[i]]++;
    }
  }
  return mapped;
}

function isPerm(str1, str2) {
  var mappedStr1 = getMapped(str1);
  
  for(var i = 0; i < str2.length; i++) {
    if(mappedStr1[str2[i]] === undefined) {
      return false;
    }
    
    mappedStr1[str2[i]]--;
    
    if(mappedStr1[str2[i]] < 0) {
      return false;
    }
  }

  return true;
}

console.log(isPerm('xyzsaffsszzz', ''));
console.log(isPerm('xyzsaffsszzz', 'zasffszyxsy'));