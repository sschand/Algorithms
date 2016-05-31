this.min = function(){
	var current = this.head;

	if(this.head == null){
		return null;
	}

	var min = this.head.value;

	while(current.next){
		if(current.next.value < min){
			min = current.next.value;
		}
		current = current.next;
	}

	return min;
}