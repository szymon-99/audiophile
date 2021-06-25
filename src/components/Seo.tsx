import React, { FC } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

interface SEOProps {
  title?: string
  description?: string
  image?: string
}

const SEO: FC<SEOProps> = ({ title, image, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<SeoQuery>(query)
  const {
    defaultDescription,
    defaultImage,
    defaultTitle,
    siteUrl,
    titleTemplate,
    twitterUsername,
  } = site.data

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  )
}

interface SeoQuery {
  site: {
    data: {
      defaultDescription: string
      defaultImage: string
      defaultTitle: string
      siteUrl: string
      titleTemplate: string
      twitterUsername: string
    }
  }
}

const query = graphql`
  query SEO {
    site {
      data: siteMetadata {
        defaultDescription: description
        defaultImage: image
        defaultTitle: title
        siteUrl: url
        titleTemplate
        twitterUsername
      }
    }
  }
`

export default SEO
