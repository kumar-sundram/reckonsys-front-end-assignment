import {combineReducers,createStore} from 'redux'
import {userReducer} from './reducer'

const configStore = ()=>{
    const store = createStore(combineReducers({
        users:userReducer
    }))
    return store
}

export default configStore