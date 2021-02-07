import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const HomeStyles = styled.div`
  text-align: center;
  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  h1 {
    margin: 0;
    margin-bottom: 0.75rem;
  }
  .established {
    margin: 0;
    background: white;
    position: relative;
    display: inline-block;
    padding: 0 1rem;
    &:before {
      content: '';
      width: 150%;
      height: 1px;
      background: black;
      position: absolute;
      top: 50%;
      left: -25%;
      z-index: -1;
    }
  }
  .products {
    margin-top: 3rem;
    display: grid;
    grid-gap: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function HomePage({ data }) {
  console.log(data);
  return (
    <Layout>
      <HomeStyles>
        <div className="container">
          <h1>BLONDIES BROWNIES</h1>
          <p className="established">Established 2020</p>
          <div className="products">
            <Img fluid={data.brownie.childImageSharp.fluid} alt="brownie" />
          </div>
        </div>
      </HomeStyles>
    </Layout>
  );
}

export const query = graphql`
  query {
    brownie: file(relativePath: { eq: "images/brownies.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 960, maxHeight: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
