import React from "react"
import styled from "styled-components"
import big from "../assets/images/big-image.jpg"
import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h4>Constrained</h4>
        <StaticImage
          as="section"
          src="../assets/images/recipes/khao-soi-chicken.jpg"
          alt="food"
          layout="constrained"
          placeholder="tracedSVG"
          className="img-wrapper"
        />
      </article>
      <article>
        <h4>Fixed</h4>
        <StaticImage
          as="section"
          src="../assets/images/recipes/khao-soi-chicken.jpg"
          alt="food"
          width={200}
          layout="fixed"
          placeholder="blurred"
          className="img-wrapper"
        />
      </article>
      <article>
        <h4>Fullwidth</h4>
        <StaticImage
          as="section"
          src="../assets/images/recipes/khao-soi-chicken.jpg"
          alt="food"
          layout="fullWidth"
          placeholder="dominantColor"
          className="img-wrapper"
        />
      </article>
    </Wrapper>
  )
}

export default Images

const Wrapper = styled.section`
  width: 70vw;
  display: grid;
  margin: 0 auto;
  gap: 2rem;
  text-align: center;

  article {
    border: 2px solid #f00;
  }
  .img-wrapper {
    border-radius: 1rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
