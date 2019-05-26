import dynamicCondition from '../../../Operator/dynamicOperator'

export default function({ array, condition, post }) {
  // handle array of strings
  const result = array.filter((item) =>
    dynamicCondition(item[post], condition, 6),
  )

  return result

  // handle array of objects
}
