import { css } from "@emotion/react"
import styled from "@emotion/styled"
import Button from "@material-ui/core/Button"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react"
import RedButton from "../components/RedButton"
import Seo from "../components/Seo"
import { ContentWrapper, Layout } from "../layouts"
const QualitySection = styled.section`
  background: white;
  padding: 2rem 0;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  max-width: ${props => props.theme.breakpoints.md};
`
const RtoSection = styled.section`
  background: ${props => props.theme.colors.primary.dark};
  padding: 2rem 0 2rem;
`
const RtoCard = styled.aside`
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: -2rem;
  margin-bottom: 2rem;
  padding: 1rem;

  .card-body {
    margin-top: 1rem;
  }

  h3 {
    font-family: "roboto", "sans-serif";
    margin-bottom: 0.5rem;
  }
  @media all and (min-width: ${props => props.theme.breakpoints.md}) {
    width: 50%;
    margin: -2rem auto 2rem;
    .gatsby-image-wrapper {
      width: 60%;
    }
  }
`

const IndexPage = ({ data, location }, props) => (
  <Layout>
    <Seo
      title={`Portable Storage Buildings & Rent-to-Own near London, KY`}
      pathname={location.pathname}
    />
    <GatsbyImage
      image={data.heroImg.childImageSharp.gatsbyImageData}
      alt="Country Barn Builders London, KY shop" />
    <QualitySection>
      <ContentWrapper>
        <h1>Quality you can trust</h1>
        <p>
          High quality storage buildings crafted with exceptional, old-fashioned
          Mennonite craftsmanship and integrity, now with two locations in
          London, KY to serve you better!
        </p>
        <ButtonContainer>
          <RedButton to="/locations" buttonText="View Locations" />
          <Button
            to="/products"
            component={Link}
            size="large"
            css={css`
              color: #902822 !important;
            `}
          >
            New Building Styles
          </Button>
          <Button
            component={Link}
            to="/specials"
            size="large"
            css={css`
              color: #902822 !important;
            `}
          >
            Special Sales
          </Button>
        </ButtonContainer>
      </ContentWrapper>
    </QualitySection>
    <RtoSection>
      <ContentWrapper>
        <h2>Rent-to-Own Available</h2>
      </ContentWrapper>
    </RtoSection>
    <ContentWrapper>
      <RtoCard>
        <GatsbyImage
          image={data.watsonLogo.childImageSharp.gatsbyImageData}
          alt="Watson Barn Rentals, LLC" />
        <div className="card-body">
          <h3>Watson Barn Rentals, LLC</h3>
          <p>
            Watson Barn Rentals provides Rent-to-Own services to shed builders
            and dealer all across the Southeast! We'd love to help you grow!
          </p>
          <Button
            size="large"
            href="https://watsonbarnrentals.com/become-a-dealer/"
            css={css`
              color: #006595 !important;
            `}
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Become a Dealer
          </Button>
          <Button
            size="large"
            href="https://watsonbarnrentals.com/faqs/"
            css={css`
              color: #006595 !important;
            `}
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Rent-to-Own FAQ's
          </Button>
        </div>
      </RtoCard>
    </ContentWrapper>
  </Layout>
)

export default IndexPage

export const heroImgQuery = graphql`{
  heroImg: file(relativePath: {eq: "shop-lot.jpg"}) {
    childImageSharp {
      gatsbyImageData(transformOptions: {cropFocus: CENTER}, layout: FULL_WIDTH)
    }
  }
  watsonLogo: file(relativePath: {eq: "watson-logo.png"}) {
    childImageSharp {
      gatsbyImageData(width: 600, layout: CONSTRAINED)
    }
  }
}
`
