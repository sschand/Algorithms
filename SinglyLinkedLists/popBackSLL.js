function popBack(){
	var value = "";
	current = this.head;
	while(current){
		if(current.next.next == null){
			value = current.next.value;
			current.next = null;
			return value;
		}
		current = current.next;
	}
}