import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Categories, AboutCard, HomeHero, HomePanel, Seo } from "../components"

const index: FC<PageProps> = () => {
  return (
    <main>
      <Seo title="Home" />
      <HomeHero />
      <Categories />
      <HomePanel />
      <AboutCard />
    </main>
  )
}

export default index
