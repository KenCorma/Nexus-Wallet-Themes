const {
  libraries: {
    React,
    ReactRedux: { connect },
    emotion: { styled, core }
  },
  components: { GlobalStyles, Panel, Switch, Tooltip, TextField, Button },
  utilities: { color, proxyRequest }
} = NEXUS;

const { keyframes } = core;

import Preview from "./Preview";
import { toggleThemePreview } from "actions/actionCreators";

const intro = keyframes`
  from { 
    transform: translate(-50%, -50%) scale(0.9);
    opacity: 0 
  }
  to { 
    transform: translate(-50%, -50%) scale(1);
    opacity: 1
  }
`;

const outro = {
  transform: [
    "translate(-50%, -50%) scale(1)",
    "translate(-50%, -50%) scale(0.9)"
  ],
  opacity: [1, 0]
};

const PopUpInternal = styled.div(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  maxHeight: "80%",
  zIndex: 99,
  background: color.darken(theme.background, 0.2),
  color: theme.mixer(0.75),
  borderRadius: "2px",
  boxShadow: "0 0 20px #000",
  animation: `${intro} 200ms ease-out`,
  animationFillMode: "both",
  display: "grid",
  gridTemplateAreas: '"header" "body" "footer"',
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto"
}));

@connect(
  state => ({
    general: state.general
  }),
  { toggleThemePreview }
)
class PopUp extends React.Component {
  onClose = e => {
    this.props.toggleThemePreview(false);
  };

  render() {
    return (
      <PopUpInternal>
        <div>{"PREVIEW"}</div>
        <Preview incomingTheme={this.props.incomingTheme} />
        <Button onClick={this.onClose}> {"Close"}</Button>
      </PopUpInternal>
    );
  }
}

export default PopUp;
