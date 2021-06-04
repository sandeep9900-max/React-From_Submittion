import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import FormReducer from './reducers/FormReducer';

// import rootReducer from '../Reducer/CombineReducer'

const store=createStore(FormReducer,applyMiddleware(logger));

export default store;