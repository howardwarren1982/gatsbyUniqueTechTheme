import * as React from "react"
import Herosection from "../components/heroSection/Herosection"
import Whatwedosection from "../components/whatWeDoSection/Whatwedosection"
import Howweworksection from "../components/howWeWorkSection/Howweworksection"
import Packagessection from "../components/packagesSection/PackagesSection"
import OurfeaturesSection from "../components/ourFeaturesSection/OurfeaturesSection"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <Herosection />
    <Whatwedosection />
    <Howweworksection />
    <OurfeaturesSection />
    <Packagessection />
  </Layout>
)

export default IndexPage
