/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import "./layout.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Footersection from "./footer/Footersection"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer>
          {" "}
          <Footersection />{" "}
        </footer>
      </div>
    </>
  )
}

export default Layout
