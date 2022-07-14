import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; 2021 - {new Date().getFullYear()} <span>SimplyRecipes</span>{" "}
        Built using <a href="https://www.gatsbyjs.com">GatsbyJS</a>
      </p>
    </footer>
  )
}

export default Footer
