import { ImageDataLike } from "gatsby-plugin-image"

export type Image = {
  localFile: ImageDataLike
}

type IncludedItem = {
  name: string
  quantity: number
}
type FeatureDescription = {
  desc: string
}

export type Product = {
  name: string
  description: String
  new: boolean
  price: number
  slug: string
  type: string
  included: IncludedItem[]
  features: FeatureDescription[]
  image: Image
  gallery: Image[]
}

type FeaturedProduct = {
  name: string
  slug: string
  image: Image
}
