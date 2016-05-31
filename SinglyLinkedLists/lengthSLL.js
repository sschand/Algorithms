this.length = function(){
	var size = 1;
	var current = this.head;

	if(this.head == null){
		return 0;
	}

	while(current.next){
		size++;
		current = current.next;
	}

	return size;
}