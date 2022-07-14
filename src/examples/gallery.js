import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: {}) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrapper>
      {nodes.map((node, index) => {
        const { name } = node
        const pathToImage = getImage(node)
        return (
          <article key={index} className="item">
            <GatsbyImage
              // image={node.childImageSharp.gatsbyImageData}
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`
export default Gallery
