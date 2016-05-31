function Back(){
	var value = "";
	var current = this.head;

	while(current){
		if(current.next == null){
			value = current.value;
			break;
		}
		current = current.next;
	}
	return value;
}