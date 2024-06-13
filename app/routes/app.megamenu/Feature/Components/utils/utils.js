export function getNumberFromPercent(value) {
  return Number(value.slice(0,-1))
}

export function getPercentFromNumber(value) {
  return `${value}%`
}

export function getNumberFromPx(value) {
  return Number(value.slice(0,-2))
}

export function getPxFromNumber(value) {
  return `${value}px`
}