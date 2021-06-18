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
export interface CategoryProduct {
  name: string
  type: string
  slug: string
  description: string
  image: Image
  new: boolean
  id: string
}

export interface IProduct extends CategoryProduct {
  included: IncludedItem[]
  features: FeatureDescription[]
  gallery: Image[]
  price: number
}

type FeaturedProduct = {
  name: string
  slug: string
  image: Image
}
