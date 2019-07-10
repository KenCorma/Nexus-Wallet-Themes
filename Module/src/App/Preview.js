const {
  libraries: {
    React,
    ReactRedux: { connect },
    emotion: { styled, core }
  },
  components: { GlobalStyles, Panel, Switch, Tooltip, TextField, Button },
  utilities: { color, proxyRequest }
} = NEXUS;

const PreviewBox = styled.div({});

class Preview extends React.Component {
  render() {
    const {
      primary,
      wallpaper,
      background,
      danger,
      dangerAccent,
      foreground,
      globeArchColor,
      globeColor,
      globePillarColor,
      primaryAccent
    } = this.props.incomingTheme;
    return (
      <div>
        <img src={wallpaper} />
        <div style={{ color: primary }}>{"Primary"}</div>
        <div style={{ color: primaryAccent }}>{"Primary Accent"}</div>
        <div style={{ color: danger }}>{"Error"}</div>
        <div style={{ color: dangerAccent }}>{"Error Accent"}</div>
        <div style={{ color: globeArchColor }}>{"Globe Archs"}</div>
        <div style={{ color: globeColor }}>{"Globe Color"}</div>
        <div style={{ color: globePillarColor }}>{"Glove Pillars"}</div>
        <div style={{ color: background }}>{"Background"}</div>
        <div style={{ color: foreground }}>{"Forground"}</div>
      </div>
    );
  }
}

export default Preview;
