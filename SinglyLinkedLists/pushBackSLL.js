function pushBack(val){
	var valNode new Node(val);
	var current = this.head;

	while(current){
		if(current.next == null){
			current.next = valNode;
			break;
		}
		current = current.next;
	}
	return true;
}