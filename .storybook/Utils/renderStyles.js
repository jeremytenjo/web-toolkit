import React from 'react'

const [Variation, setVariation] = useState(null)
const req = require.context('./', true, /\.stories\.js$/)
export default () => {
  useEffect(() => {
    loadStories()
  }, [])

  const loadStories = () => {
    req.keys().forEach(async (filename, i) => {
      const Comp = await import(`${filename}`)
      console.log(filename)

      if (i === 0) {
        console.log(i)

        console.log(Comp)
        setVariation(Comp.default)

        // return req(filename)
        return Comp
      }
    })
  }
  return <>{Variation && <Variation />}</>
}
