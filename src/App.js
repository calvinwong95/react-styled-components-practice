import StyledButton, {
  DarkButton,
  FancyButton,
  SubmitButton,
} from "./components/Button/Button";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  dark:{
    primary: '#000',
    text: '#fff',
  },
  light: { 
    primary: '#fff',
    text: '#000',

  },
  fontFamily: 'Segoe UI'
}

const GlobalStyle = createGlobalStyle`
  button {
    font-family: ${(props) => props.theme.fontFamily};
  }
`

function App() {
  return (

    <ThemeProvider theme={theme}>
          <GlobalStyle/>
      <div className="App">
        <StyledButton variant="outline" type="submit">
          Styled Button
        </StyledButton>
        <FancyButton>Fancy Button</FancyButton>
        <SubmitButton>Submit Button</SubmitButton>
        <DarkButton>Dark Button</DarkButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
