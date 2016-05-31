this.display = function(){
	if(this.head == null){
		return "No values";
	}

	var current = this.head;
	var str = "The values are: " + current.value + " ";

	while(current.next){
		str += current.next.value + ", ";
		current = current.next;
	}

	return str.slice(0, str.length - 1);
}