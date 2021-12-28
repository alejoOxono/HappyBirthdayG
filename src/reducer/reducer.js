import { GET_NAME } from "../actions/constants";

const stateInitial = {
    nameState : ''
}

const reducer = (state = stateInitial, { type, payload }) => {
    switch (type) {
        
        case GET_NAME:
            return{
                ...state,
                nameState: payload
            };

        default:
            return state;
    }
}

export default reducer;