import dynamicCondition from '../../../Operator/DynamicOperator/dynamicOperator'

export default function({ array, post, condition, value }) {
  const result = array.filter((item) => {
    const itemPost = post ? item[post] : item
    return dynamicCondition({ post: itemPost, operator: condition, value })
  })
  return result
}
