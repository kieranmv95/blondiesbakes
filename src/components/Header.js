import React from 'react';
import styled from 'styled-components';
import Logo from '../icons/logo.inline.svg';

const HeaderStyles = styled.header`
  .logo {
    width: 120px;
    height: 120px;
    margin: 0 auto;
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 160px;
      height: 160px;
    }
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="logo">
        <Logo />
      </div>
    </HeaderStyles>
  );
}
