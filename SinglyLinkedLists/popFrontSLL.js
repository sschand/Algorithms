function popFront(list){
	if(!list.head){
		return null;
	}else{
		var headNode = list.head.val;
		list.head = list.head.next;
		reutn headNode;
	}
}