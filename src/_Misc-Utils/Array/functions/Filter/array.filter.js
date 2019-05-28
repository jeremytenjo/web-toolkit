import dynamicCondition from '../../../Operator/dynamicOperator'

export default function({ array, post, condition, value }) {
  // handle array of single values
  const result = array.filter((item) => {
    return dynamicCondition({post: item, operator: condition, value})
  })

  return result

  // handle array of objects
}
