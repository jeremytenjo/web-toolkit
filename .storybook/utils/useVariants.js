import React, { useState, useEffect, Fragment } from 'react'
import B from '../customComponents/variationBlock'
import { storiesOf } from '@storybook/react'
import FunctionVariationComponent from './functionVariationComponent'

export const useVariants = ({
  req,
  Variants,
  dir,
  short,
  type = 'styles/',
  getSpecTestValue,
}) => {
  const paths = req.keys()
  const [Elements, setElements] = useState(null)

  useEffect(() => {
    getElements()
  }, [])

  const getElements = async () => {
    const Elements = paths.map(async (location) => {
      const storyName = dir.replace('/', '|')
      const cleanLocation = location.substring(2)
      const styleName = location.split('/')[1]
      const title = styleName
      const { default: Comp } = await import(`../../src/${dir}/${type}${title}/index`)
      let testValue = ''
      let Component = Variants ? (
        <Variants Component={Comp} title={title} testValue={testValue} />
      ) : null

      if (getSpecTestValue) {
        const { testValue: importTestValue } = await import(
          `../../src/${dir}/${type}${title}/${title}.spec.js`
        )
        testValue = importTestValue
        Component = (
          <FunctionVariationComponent func={Comp} title={title} testValue={testValue} />
        )
      }

      const El = () => (
        <Fragment key={title}>
          <B title={title} noBackground>
            {Component}
          </B>
        </Fragment>
      )

      storiesOf(storyName, module).add(styleName, El)

      return El()
    })

    const els = await Promise.all(Elements)
    const styles = <div style={{ display: 'grid', gridAutoFlow: 'column' }}>{els}</div>

    setElements(styles)
  }

  return { Elements }
}
