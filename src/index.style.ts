import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
	  padding: 0;
	  margin: 0;
    font-size: 14px;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    background: ${({ theme }: any) => theme.background};
    color: ${({ theme }) => theme.fontColor};
  }

  p{
    margin: 0;
  }
`;

export default GlobalStyles;
