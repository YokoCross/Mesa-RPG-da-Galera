import { combineReducers } from 'redux'

import headerStore from './headerStore'
import charactersStore from './charatersStore'

export default combineReducers({
    headerStore,
    charactersStore,
})