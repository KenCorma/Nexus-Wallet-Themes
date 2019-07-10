import * as TYPE from "actions/types";

const initialState = {
  availableThemes: []
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

    default:
      return state;
  }
};
