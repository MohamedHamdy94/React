import { Fovorites_state, Count_state } from './actions'
const INITIAL_STATE = {
    movieArry: [],
    count: 0
}

export default function FovoritesList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Fovorites_state:
            return {
                movieArry:[...state.movieArry , action.payload] 
            };
        case Count_state:
            return {...state,
                count: action.payload
            };
        default:
            return state;
    }
}