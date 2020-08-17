const CHARATERS_STATE = {
    chosenWorld: '',
    wantedName:'',
}

export default function charatersStore(state = CHARATERS_STATE, action){
    
    if(action.type === 'CHANGING_WORLD'){
        return {...state, chosenWorld: action}
    }

    if(action.type === 'SEARCHING_NAME'){
        return {...state, wantedName: action}
    }

    return state
}