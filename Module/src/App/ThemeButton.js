import FileSaver from "file-saver";
import { toggleThemePreview, setSelectedTheme } from "actions/actionCreators";

const {
  libraries: {
    React,
    ReactRedux: { connect },
    emotion: { styled }
  },
  components: { GlobalStyles, Panel, Switch, Tooltip, TextField, Button },
  utilities: { color, proxyRequest }
} = NEXUS;

const ThemeButtonContainer = styled.div(({ theme }) => ({
  background: color.lighten(theme.background, 0.4),
  border: `1px solid ${theme.primary}`,
  borderRadius: "2.5px",
  height: "6em",
  margin: "1em",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto",
  transition: `background ${1}`,
  "&:hover": {
    background: color.darken(theme.background, 0.2)
  }
}));

const PreviewImage = styled.img({
  height: "50px",
  width: "50px"
});

@connect(
  state => ({
    general: state.general
  }),
  { toggleThemePreview, setSelectedTheme }
)
class ThemeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      themeJson: {}
    };
  }
  clickSaveFile() {
    FileSaver.saveAs(this.props.data.url, "theme.json");
  }

  async clickPressPreview() {
    try {
      const result = await proxyRequest(this.props.data.url, {
        responseType: "json"
      });
      console.log(result);
      this.setState({
        themeJson: result.data
      });
      this.props.setSelectedTheme(result.data);
      this.props.toggleThemePreview(true);
    } catch (e) {}
  }

  render() {
    const { name, url } = this.props.data;
    console.log(this.props);
    const dddd = name.split("_");
    return (
      <ThemeButtonContainer>
        {`Name: ${dddd[0]} Author: ${dddd[1].slice(0, -5)}`}

        <Button
          style={{ width: "6em" }}
          onClick={() => this.clickPressPreview()}
        >
          {"Preview"}
        </Button>
        <Button style={{ width: "6em" }} onClick={() => this.clickSaveFile()}>
          {"Download"}
        </Button>
        {this.state.themeJson.wallpaper ? (
          <PreviewImage src={this.state.themeJson.wallpaper} />
        ) : null}
      </ThemeButtonContainer>
    );
  }
}

export default ThemeButton;
