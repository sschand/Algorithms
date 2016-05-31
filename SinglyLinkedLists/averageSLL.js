this.average = function(){
	if(this.head == null){
		return null;
	}

	var sum = this.head.value;
	var length = this.length;
	var current = this.head;

	while(current.next){
		sum += current.next.value;
		current = current.next;
	}

	var average = sum/length;
	return average;
}