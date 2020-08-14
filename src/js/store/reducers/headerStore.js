const HEADER_STATE = {
    navbarVisible: 'display-none',
}

export default function headerStore(state = HEADER_STATE, action){
    
    if(action.type === 'TOGGLE_NAVBAR_VISIBLE'){
        if(action.navbarVisible === 'display-none'){
            return{...state, navbarVisible: ''}
        } else{
            return{...state, navbarVisible: 'display-none'}
        }
    }

    return state
}