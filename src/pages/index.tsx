import React, { FC } from "react"
import { PageProps } from "gatsby"
import { FeaturedProducts, AboutCard, HomeHero, HomePanel } from "../components"

const index: FC<PageProps> = () => {
  return (
    <main>
      <HomeHero />
      <FeaturedProducts />
      <HomePanel />
      <AboutCard />
    </main>
  )
}

export default index
