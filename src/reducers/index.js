import data from '../data/data.json';

const initialState = data;
initialState.carrierToCheck='all';

export default function appState(state = initialState, action) {
    switch (action.type) {
        case 'SET_CARRIER':
        return { ...state, carrierToCheck: action.payload };

        default:
        return state;
    }
}
