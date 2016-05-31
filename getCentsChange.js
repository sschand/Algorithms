************************************************************************************************************
GETCENTSCHANGE: Given an integer (299), break down how many dollars, quarters, dimes, nickels, and pennies 
make up this integer ('You have 2 dollards, 3 quarters, 2 dimes, and 4 pennies'):

	set new variable, amount, equal to the number, you'll be subtracting specific coin type 
	get how many dollars (100s) there are in this amount
	set amount to original amount subtracted by amount of dollars to get the remainder
	get how many quarters (25s) there are in this amount
	set amount variable to original amount subtracted by amount of quarters to get remainder
	get how many dimes (10s) there area in the amount
	set amount variable to amount subtracted by amount of dimes to get remainder
	set amount varibale to amount subtracted by amount of nickels to get remainder
	get how many nickels (5s) there are in the amount
	get how many pennies (1s) there are in the amount, if you've been updated the amount, then your leftover amount is the amount 
	return the string
************************************************************************************************************


function getChange(number){
	var amount = number;
	
	var dollars = Math.floor(amount/100);
	amount = amount - (dollars * 100);
	
	var quarters = Math.floor(amount/25);
	amount = amount - (quarters * 25); 
	
	var dimes = Math.floor(amount/ 10);
	amount = amount - (dimes * 10);
	
	var nickels = Math.floor(amount/5);
	amount = amount - (nickels * 5);

	var pennies = amount;

	return "In "+number+" you have "+dollars+" dollars, "+quarters+" quarters, "+dimes+" dimes, "+nickels+" nickels, "+pennies+" pennies.";

}

console.log(getChange(306));