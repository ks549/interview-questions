export default function(state = null, action){
	switch(action.type){
		case "USER_SELECT":
			return action.payload;
			break;
	}

	return state;
}