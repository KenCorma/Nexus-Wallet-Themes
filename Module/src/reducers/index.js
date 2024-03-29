import initialized from "./initialized";
import theme from "./theme";
import coreInfo from "./coreInfo";
import settings from "./settings";
import ui from "./ui";
import general from "./general";

const {
  libraries: {
    Redux: { combineReducers }
  }
} = NEXUS;

export default function createReducer() {
  return combineReducers({
    initialized,
    theme,
    coreInfo,
    settings,
    ui,
    general
  });
}
