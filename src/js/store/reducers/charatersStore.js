const CHARATERS_STATE = {
    chosenWorld: '',
    wantedName:'',
}

export default function charatersStore(state = CHARATERS_STATE, action){
    
    if(action.type === 'CHANGING_WORLD'){
        return {...state, chosenWorld: action.world}
    }

    if(action.type === 'SEARCHING_NAME'){
        return {...state, wantedName: action.name}
    }

    return state
}