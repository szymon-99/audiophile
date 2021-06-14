import React from "react"
import { data } from "../constants/nav-links"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <ul className="menu">
      {data.map(link => {
        const { name, path, id } = link
        return (
          <li key={id}>
            <Link to={path}>{name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavLinks
