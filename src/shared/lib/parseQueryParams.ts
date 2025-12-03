export function parseQueryParams<BodyType extends object = object>(body: BodyType) {
  const arr = Object.entries(body)
  const resArr = []
  for(const [key, value] of arr) {
    if(value !== undefined && !Number.isNaN(value)) {
      resArr.push(`${key}=${value}`)
    }
  }
  if(resArr.length === 0) {
    return ''
  }
  return resArr.join('&')
}