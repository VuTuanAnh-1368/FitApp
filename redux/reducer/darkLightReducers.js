import { SET_DARK_MODE, SET_LIGHT_MODE } from "../action/actions";
import { lightStyles, darkStyles } from "../darkLight/styles";

const initialState = {
  mode: "light",
 styles: lightStyles,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        mode: "dark",
        styles: darkStyles,
      };
    case SET_LIGHT_MODE:
      return {
        ...state,
        mode: "light",
        styles: lightStyles,
      };
    default:
      return state;
  }
};

export default settingsReducer;