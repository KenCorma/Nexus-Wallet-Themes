import * as TYPE from "./types";

export const initialize = data => ({
  type: TYPE.INITIALIZE,
  payload: data
});

export const updateCoreInfo = coreInfo => ({
  type: TYPE.UPDATE_CORE_INFO,
  payload: coreInfo
});

export const updateTheme = theme => ({
  type: TYPE.UPDATE_THEME,
  payload: theme
});

export const showConnections = () => ({
  type: TYPE.SHOW_CONNECTIONS
});

export const hideConnections = () => ({
  type: TYPE.HIDE_CONNECTIONS
});

export const updateInput = inputValue => ({
  type: TYPE.UPDATE_INPUT,
  payload: inputValue
});

export const setAvailableThemes = payload => ({
  type: TYPE.SET_AVAILABLE_THEMES,
  payload: payload
});

export const toggleThemePreview = payload => ({
  type: TYPE.TOGGLE_PREVIEW,
  payload: payload
});

export const setSelectedTheme = payload => ({
  type: TYPE.SET_SELECTED_THEME,
  payload: payload
});
