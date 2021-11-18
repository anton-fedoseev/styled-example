import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './theme';

import logo from './logo.svg';
import * as Styled from './styled';

const { PUBLIC_URL } = process.env;

function App() {
    const [theme, setTheme] = useState(null);

    const downloadTheme = async () => {
        try {
            const response = await fetch(`${PUBLIC_URL}/theme.json`);
            const theme = await response.json();

            setTheme(theme);
        } catch (error) {
            console.log('problems with loading theme');
        }
    };

    useEffect(() => {
        downloadTheme();
    }, []);

    if (!theme) {
        return null;
    }

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
