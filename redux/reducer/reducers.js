import { combineReducers } from 'redux';
import languageReducer from './languageReducer'; // Import your language reducer
import darkLightReducer from './darkLightReducers';

const rootReducer = combineReducers({
  language: languageReducer,
  settings: darkLightReducer,
});

export default rootReducer;