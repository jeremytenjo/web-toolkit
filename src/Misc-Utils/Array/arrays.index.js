export default async ({ type, ...params }) => {
  const arrayFunc = await import(`./functions/arrays.${type}`)
  return arrayFunc.default(params)
}
