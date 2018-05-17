/*
    Given a non-empty string like "Code" return a string like "CCoCodCode".
 */

function stringSplosion(str) {
    if (str.length == 0) {
        return;
    }

    var strpos = 0;
    var newStr = '';

    while (strpos < str.length) {
        var i = 0;

        while (i <= strpos) {
            newStr += str[i]''
            i++;
        }
        strpos++;
    }

    return newStr;
}

console.log(stringSplosion('Code'));

