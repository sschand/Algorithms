function pushBack(val){
	var valNode new Node(val);
	var current = this.head;

	while(current){
		if(current.next == null){
			current.next = valNode;
			return true;
		}
		current = current.next;
	}
}