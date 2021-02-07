import { css } from 'styled-components';

const typography = css`
  body {
    font-family: ${({ theme }) => theme.font.family}, sans-serif;
    font-size: ${({ theme }) => theme.font.base};
  }

  h1 {
    font-weight: ${({ theme }) => theme.font.weight.light};
  }
`;

export default typography;
