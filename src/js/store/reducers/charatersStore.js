const CHARATERS_STATE = {
    chosenWorld: '',
}

export default function charatersStore(state = CHARATERS_STATE, action){
    
    if(action.type === 'CHANGING_WORLD'){

        return {...state, chosenWorld: action}
    }

    return state
}