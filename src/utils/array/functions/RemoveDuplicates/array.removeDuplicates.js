export default ({ data, comp }) => {
  const uniqueData = data
    .map((e) => e[comp])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => data[e])
    .map((e) => data[e])

  return uniqueData
}
