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
        skills: {
            skillOne: '',
            skillTwo: '',
            skillThree: '',
        },
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
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillOne: action.value } }, skillschosenCount: 1 }
            case 1:
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillTwo: action.value } }, skillschosenCount: 2 }
            case 2:
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillThree: action.value } }, skillschosenCount: 3 }
            case 3:
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillThree: action.value } }, skillschosenCount: 4 }
            case 4:
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillThree: action.value } }, skillschosenCount: 5 }
            case 5:
                return { ...state, characterCreated: { ...state.characterCreated, skills: { ...state.skills, skillThree: action.value } }, skillschosen: 'display-none', submitbutton:'global-button esgalCreation-button-submit'  }
            default:
                return null
        }
    }

    return state
}