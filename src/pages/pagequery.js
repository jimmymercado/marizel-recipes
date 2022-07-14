import React from "react"
import { graphql } from "gatsby"

const PageQuery = ({ data }) => {
  return <div>author: {data.site.info.author}</div>
}

export const dataQL = graphql`
  query pagequeryData {
    site {
      info: siteMetadata {
        title
        description
        author
        simpleData {
          name
          age
        }
        complexData {
          pet
          name
          age
        }
      }
      buildTime
    }
  }
`

export default PageQuery
