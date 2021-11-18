import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import logo from './logo.svg';
import * as Styled from './styled';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Styled.Wrapper>
                <Styled.Header>
                <Styled.Logo src={logo} alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Styled.Link
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </Styled.Link>
                </Styled.Header>
            </Styled.Wrapper>
        </ThemeProvider>
    );
}

export default App;
