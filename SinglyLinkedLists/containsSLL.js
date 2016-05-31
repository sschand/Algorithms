function contains(val, list){
	if(!list.head){
		return false;
	}else{ //if head
		if(list.head.val == val){
			return true;
		}else { 
			var current = list.head;
			while(current.next){
				if(current.next.val == val){
					return true;
				}
			}
		}
		return false;
	}
}