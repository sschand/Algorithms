/***********************************************************************************************************
InvertHash: Create invertHash(assocArr) that converst a hash's keys to values and values to corresponding 
keys. You will need to learn and use a JS for...in here!
Example: Given {'name' : 'Zaphod', 'numHeads' : 2} you should return {'Zaphod' : 'name', 2 : 'numHeads'}
***********************************************************************************************************/

function invertHash(obj){
  var newObj = {};
	for(var key in obj){
		newObj["'"+obj[key]+"'"] = key;
	}
	
	return newObj;
}

console.log(invertHash( {'name' : 'Zaphod', 'numHeads' : 2}));