import * as React from "react"
import Herosection from "../components/heroSection/Herosection"
import Whatwedosection from "../components/whatWeDoSection/Whatwedosection"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Herosection />
    <Whatwedosection />
  </Layout>
)

export default IndexPage
