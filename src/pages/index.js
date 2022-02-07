import * as React from "react"
import Herosection from "../components/heroSection/Herosection"
import Whatwedosection from "../components/whatWeDoSection/Whatwedosection"
import Howweworksection from "../components/howWeWorkSection/Howweworksection"
import Packagessection from "../components/packagesSection/PackagesSection"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Herosection />
    <Whatwedosection />
    <Howweworksection />
    <Packagessection />
  </Layout>
)

export default IndexPage
