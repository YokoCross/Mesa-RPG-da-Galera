const CHARATERS_STATE = {
    chosenWorld: '',
    wantedName: '',
    racaChosen: 'esgalCreation-input-flex',
    classChosen: 'display-none',
    skillschosen: 'display-none',
    skillschosenCount: 0,
    submitbutton:'display-none',
    characterCreated: {
        name: '',
        race: '',
        class: '',
        skills:[],
        status: '',
        titles: [],
        itens: [],
        type: 'player',
    }
}

export default function charatersStore(state = CHARATERS_STATE, action) {

    if (action.type === 'CHANGING_WORLD') {
        return { ...state, chosenWorld: action.world }
    }

    if (action.type === 'SEARCHING_NAME') {
        return { ...state, wantedName: action.name }
    }

    if (action.type === 'CHOOSING_RACE') {
        return { ...state, characterCreated: { ...state.characterCreated, race: action.name }, racaChosen: 'display-none', classChosen: 'esgalCreation-input-flex' }
    }

    if (action.type === 'CHOOSING_CLASS') {
        return { ...state, characterCreated: { ...state.characterCreated, class: action.value }, classChosen: 'display-none', skillschosen: 'esgalCreation-input-flex' }
    }
    
    if (action.type === 'CHOOSING_SKILLS') {
        switch (state.skillschosenCount) {
            case 0:
                let array = state.characterCreated.skills
                array.push(action.value)
                return { ...state, characterCreated: { ...state.characterCreated, skills: array }, skillschosenCount: 1 }
            case 1:
                let array2 = state.characterCreated.skills
                array2.push(action.value)
                return { ...state, characterCreated: { ...state.characterCreated, skills: array2 }, skillschosenCount: 2 }
            case 2:
                let array3 = state.characterCreated.skills
                array3.push(action.value)
                return { ...state, characterCreated: { ...state.characterCreated, skills: array3 }, skillschosenCount: 3 }
            case 3:
                let array4 = state.characterCreated.skills
                array4.push(action.value)
                return { ...state, characterCreated: { ...state.characterCreated, skills: array4 }, skillschosenCount: 4 }
            case 4:
                let array5 = state.characterCreated.skills
                array5.push(action.value)
                return { ...state, characterCreated: { ...state.characterCreated, skills: array5 }, skillschosen: 'display-none', submitbutton:'global-button esgalCreation-button-submit' }
            default:
                return null
        }
    }

    return state
}