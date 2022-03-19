import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap"
import "./carouselOverrides.scss"

export default function Fadingcarosel() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <StaticImage
            src="../../images/laptopPhone.png"
            width={970}
            alt="Phone and laptop side by side"
            style={{ alignContent: "center" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../../images/seopic.jpg"
            width={970}
            alt="Phone and laptop side by side"
          />
        </Carousel.Item>
        <Carousel.Item>
          <StaticImage
            src="../../images/picjumbocom.jpg"
            width={970}
            alt="Phone and laptop side by side"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
