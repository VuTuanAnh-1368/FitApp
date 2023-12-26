import { CHANGE_LANGUAGE } from '../action/actions';

const initialState = {
  currentLanguage: 'EN',
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
