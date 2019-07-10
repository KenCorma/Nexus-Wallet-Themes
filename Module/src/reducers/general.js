import * as TYPE from "actions/types";

const initialState = {
  availableThemes: [],
  openPreview: false,
  selectedTheme: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.INITIALIZE:
      if (!action.payload.general) {
        return state;
      }
      return action.payload.general;

    case TYPE.SET_AVAILABLE_THEMES:
      return {
        ...state,
        availableThemes: action.payload
      };

    case TYPE.TOGGLE_PREVIEW: {
      return {
        ...state,
        openPreview: action.payload
      };
    }
    case TYPE.SET_SELECTED_THEME: {
      return {
        ...state,
        selectedTheme: action.payload
      };
    }

    default:
      return state;
  }
};
