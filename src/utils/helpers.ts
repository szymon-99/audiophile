export const formatPrice = (num: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(num / 100)
}

interface Sortable {
  new: boolean
}
export const sortProducts = <T extends Sortable>(products: T[]): T[] => {
  return products.sort((a, b) => (a.new === b.new ? 0 : a.new ? -1 : 1))
}
