export default function(state = null, action){
	switch(action.type){
		case "COMPANY_SELECT":
			return action.payload;
			break;
	}

	return state;
}