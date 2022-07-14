import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query FirstQuery {
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

const ComponentName = () => {
  const data = useStaticQuery(getData)
  //return <pre>{JSON.stringify(data, null, 4)}</pre>
  return (
    <div>
      <h2>{data.site.info.author}</h2>
      <div>
        {data.site.info.complexData.map((item, index) => {
          return (
            <>
              <p>
                type: {item.pet}
                <br />
                name: {item.name}
              </p>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ComponentName
