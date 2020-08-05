import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import category from '../reducers/category';

export default combineReducers({
    routing: routerReducer,
    category
})