import React, { useState, useEffect } from 'react'

import Form from '../../../Form/Ui/React/form.index'
import List from '../../../../Data-Display/List/Ui/React/list.index'

import { defaultProps, propTypes } from './collection.propTypes'
import { Wrapper } from './collection.styles'

const Collection = ({
  onClick,
  ItemComponent,
  placeholder,
  textFieldStyle,
  itemComponentTextKey,
}) => {
  const [data, setdata] = useState([])
  const [TextField, setTextField] = useState(null)

  useEffect(() => {
    loadTextField()
  }, [])

  const loadTextField = async () => {
    let { default: Comp } = await import(
      `../../../Form/Text-Field/Ui/React/Styles/${textFieldStyle}`
    )
    setTextField(
      <Comp color='secondary' name='item' placeholder={placeholder} />,
    )
  }

  const handleSubmit = ({ item }) => {
    const dataCopy = data.slice()
    // 1.dont add if already exists
    if (!dataCopy.some((el) => el[itemComponentTextKey] === item)) {
      //2. add to array
      dataCopy.push({ [itemComponentTextKey]: item })

      //3. send event with item added data

      //4 clear field
      setdata(dataCopy)
      console.log(item)
    }
  }

  return (
    <Wrapper>
      <List
        overflows
        data={data}
        direction='column'
        ItemComponent={ItemComponent}
        onItemClick={onClick}
      />
      <Form onSubmitSuccess={handleSubmit}>{TextField && TextField}</Form>
    </Wrapper>
  )
}

Collection.defaultProps = defaultProps
Collection.propTypes = propTypes

export default Collection
