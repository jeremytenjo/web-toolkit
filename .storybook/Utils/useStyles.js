import React, { useState, useEffect } from 'react'
import B from '../Custom-Components/VariationBlock/variationBlock.index'

export default ({ req, Base, name, props }) => {
  const paths = req.keys()
  const [Elements, setElements] = useState(null)

  useEffect(() => {
    getElements()
  }, [])

  const getElements = async () => {
    const Elements = paths.map(async (location) => {
      const cleanLocation = location.substring(2)
      const styleName = location.split('/')[1]
      const title = styleName
      let Comp = await import(`../../src/${name}/Ui/React/Styles/1/index`)
      Comp = Comp.default

      var result = Object.keys(props).map(function(key) {
        return [key, props[key]]
      })

      console.log(result)

      const getAllSubsets = (theArray) =>
        theArray.reduce(
          (subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),
          [[]],
        )

      console.log(getAllSubsets([1, 2, 3]))

      return (
        <>
          <B title={title} key={title} noBackground>
            <Base Button={Comp} />
          </B>
        </>
      )
    })

    setElements(await Promise.all(Elements))
  }

  return { Elements }
}
