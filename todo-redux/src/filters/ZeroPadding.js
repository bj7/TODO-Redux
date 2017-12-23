
export function padd (val) {
  if (parseInt(val) < 10) return `0${val}`
  return val
}
