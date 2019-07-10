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
  background: color.darken(theme.background, 0.2),
  color: theme.mixer(0.75),
  borderRadius: modalBorderRadius,
  boxShadow: "0 0 20px #000",
  animation: `${intro} ${timing.quick} ease-out`,
  animationFillMode: "both",
  display: "grid",
  gridTemplateAreas: '"header" "body" "footer"',
  gridTemplateColumns: "1fr",
  gridTemplateRows: "auto 1fr auto"
}));

class PopUp extends React.Component {
  render() {
    return (
      <PopUpInternal>
        <div>{"TEST"}</div>
      </PopUpInternal>
    );
  }
}

export default PopUp;
