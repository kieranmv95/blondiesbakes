import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import typography from './Typography';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  body {
    background: ${({ theme }) => theme.color.background};
  }
  ${typography}
`;

export default GlobalStyles;
