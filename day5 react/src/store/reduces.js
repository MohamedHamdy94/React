import { Fovorites_state, Count_state, Movies_details, Movies_List, } from './actions'
const INITIAL_STATE = {
    movieArry: [],
    count: 0,

    moveList: [],
    moveDetails: {},

}

export default function fovoritesList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Fovorites_state:
            return {
                ...state,
                movieArry: action.payload
            };
        case Count_state:
            return {
                count: action.payload
            };
        case Movies_List:
            return {
                ...state,
                moveList: action.payload,
            };
        case Movies_details:
            return {
                ...state,
                moveDetails: action.payload
            };
        default:
            return state;
    }
}