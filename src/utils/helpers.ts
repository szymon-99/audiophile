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

export const handleClickOutside = (
  e: MouseEvent,
  callback: () => void,
  ref: React.RefObject<HTMLDivElement>
) => {
  const target = e.target as Element
  if (ref.current && !ref.current.contains(target)) {
    callback()
  }
}
