import React from "react"
import setupTags from "../utils/setupTags"
import { Link } from "gatsby"
import slugify from "slugify"

const TagsList = ({ recipes = [] }) => {
  const newTags = setupTags(recipes)
  //console.log(newTags)
  return (
    <div className="tag-container">
      <h4>Tags</h4>
      <div className="tags-list">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          return (
            <Link to={`/tags/${slugify(text, { lower: true })}`} key={index}>
              {text} ({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TagsList
