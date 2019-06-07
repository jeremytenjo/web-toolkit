export default async ({ name, ...rest }) => {
  const module = await import(`./animation.${name}`)
  module.default(rest)
}
