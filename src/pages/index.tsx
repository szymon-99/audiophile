import React, { FC } from "react"
import { PageProps } from "gatsby"
import { Categories, AboutCard, HomeHero, HomePanel } from "../components"

const index: FC<PageProps> = () => {
  return (
    <main>
      <HomeHero />
      <Categories />
      <HomePanel />
      <AboutCard />
    </main>
  )
}

export default index
