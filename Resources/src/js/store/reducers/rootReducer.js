import { combineReducers } from 'redux'
import configs from './configs'
import address from './address'
import points from './points'
import current from './current'
import center from './center'
import loader from './loader'

const rootReducer = combineReducers({
    configs,
    address,
    points,
    current,
    center,
    loader
});

export default rootReducer
