export default async ({ name, ...rest }) => {
  const module = await import(`./Types/animation.${name}`)
  module.default(rest)
}
