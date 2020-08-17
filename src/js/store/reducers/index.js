import { combineReducers } from 'redux'

import headerStore from './headerStore'
import charactersStore from './charatersStore'
import classesStore from './classesStore'

export default combineReducers({
    headerStore,
    charactersStore,
    classesStore,
})