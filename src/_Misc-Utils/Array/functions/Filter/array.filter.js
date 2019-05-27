import dynamicCondition from '../../../Operator/dynamicOperator'

export default function({ array, post, condition, value }) {
  // handle array of strings
  const result = array.filter((item) =>
    dynamicCondition(item, condition, value),
  )

  return result

  // handle array of objects
}
