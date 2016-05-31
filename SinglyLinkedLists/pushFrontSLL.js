function pushFront(x, list){
	if(!list.head){
		list.head = new listNode(x);
	}else{
		var node = new listNode(x);
		node.next = list.head;
		list.head = node;
	}

	return list.head;
}