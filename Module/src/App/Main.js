import {
  showConnections,
  hideConnections,
  updateInput,
  setAvailableThemes
} from "actions/actionCreators";

import ThemeButton from "./ThemeButton";

const {
  libraries: {
    React,
    ReactRedux: { connect },
    emotion: { styled }
  },
  components: { GlobalStyles, Panel, Switch, Tooltip, TextField, Button },
  utilities: {
    confirm,
    rpcCall,
    onceRpcReturn,
    showErrorDialog,
    showSuccessDialog,
    proxyRequest
  }
} = NEXUS;

const DemoTextField = styled(TextField)({
  maxWidth: 400
});

const ThemeList = styled.div({
  padding: "0.5rem 1rem 0rem 1rem",
  flexGrow: 1,
  flexBasis: "35em",
  overflow: "auto"
});

@connect(
  state => ({
    coreInfo: state.coreInfo,
    showingConnections: state.settings.showingConnections,
    inputValue: state.ui.inputValue,
    availableThemes: state.general.availableThemes
  }),
  { showConnections, hideConnections, updateInput, setAvailableThemes }
)
class Main extends React.Component {
  componentDidMount() {
    this.test();
  }

  confirmToggle = async () => {
    const { showingConnections, showConnections, hideConnections } = this.props;
    const question = showingConnections
      ? "Hide number of connections?"
      : "Show number of connections?";

    const agreed = await confirm({ question });
    if (agreed) {
      if (showingConnections) {
        hideConnections();
      } else {
        showConnections();
      }
    }
  };

  handleChange = e => {
    this.props.updateInput(e.target.value);
  };

  async test() {
    try {
      const result = await proxyRequest(
        "https://api.github.com/repos/KenCorma/Nexus-Wallet-Themes/contents/Themes",
        { responseType: "json" }
      );
      console.error(result);
      const asdgh = result.data.map(Element => {
        return { name: Element.name, url: Element.download_url };
      });

      console.log(asdgh);
      this.props.setAvailableThemes(asdgh);
    } catch (e) {
      console.error(e);
    }
  }

  getDifficulty = async () => {
    try {
      const response = await rpcCall("getdifficulty", [[]]);
      showSuccessDialog({
        message: "Mining difficulty",
        note: JSON.stringify(response, null, 2)
      });
    } catch (err) {
      showErrorDialog({
        message: "Cannot get difficulty"
      });
    }
  };

  returnButtons() {
    const buttons = this.props.availableThemes.map(Element => {
      return <ThemeButton data={Element} />;
    });
    console.log(buttons);
    return <ThemeList>{buttons}</ThemeList>;
  }

  render() {
    const { coreInfo, showingConnections, inputValue } = this.props;
    return (
      <Panel
        title="React Module Example"
        icon={{ url: "react.svg", id: "icon" }}
      >
        <GlobalStyles />
        {this.returnButtons()}
      </Panel>
    );
  }
}

export default Main;
