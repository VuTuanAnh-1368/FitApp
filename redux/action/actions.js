export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_LIGHT_MODE = "SET_LIGHT_MODE";

//Dark_Light
export const setDarkMode = () => ({
  type: SET_DARK_MODE,
  payload: {},
});

export const setLightMode = () => ({
  type: SET_LIGHT_MODE,
  payload: {},
});

//ChangeLanguage
export const changeLanguage = (language) => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

