this.max = function(){
	var current = this.head;

	if(this.head == null){
		return null;
	}

	var max = this.head.value;

	while(current.next){
		if(current.next.value > max){
			max = current.next.value;
		}
		current = current.next;
	}

	return max;
}