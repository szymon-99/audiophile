export const formatPrice = (num: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
  }).format(num / 100)
}
