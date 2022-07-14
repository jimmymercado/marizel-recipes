import React, { useState } from "react"
import { Link } from "gatsby"
import { FiAlignJustify } from "react-icons/fi"
import logo from "../assets/images/logo_Marizel.png"

const Navbar = () => {
  const [navShow, setNavShow] = useState(false)
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button className="nav-btn" onClick={() => setNavShow(!navShow)}>
            <FiAlignJustify />
          </button>
        </div>
        <div className={navShow ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            onClick={() => setNavShow(false)}
          >
            recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            onClick={() => setNavShow(false)}
          >
            tags
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setNavShow(false)}
          >
            about
          </Link>
          <div className="nav-link contact-link">
            <Link
              to="/contact"
              className="btn"
              onClick={() => setNavShow(false)}
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
