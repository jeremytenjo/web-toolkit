import React, { useState, useEffect } from 'react'

import Form from '../form'
import List from '../../dataDisplay/list'

import { defaultProps, propTypes } from './propTypes'
import { Wrapper } from './styles'

const Collection = ({
  initialData,
  ItemComponent,
  placeholder,
  textFieldStyle,
  itemComponentTextKey,
  editable,
  removeItemOnClick,
  onItemClick,
  onItemAdded,
  onItemRemoved,
}) => {
  const [data, setdata] = useState(initialData)
  const [TextField, setTextField] = useState(null)

  useEffect(() => {
    loadTextField()
  }, [])

  const loadTextField = async () => {
    let { default: Comp } = await import(`../form/textField/styles/${textFieldStyle}`)
    setTextField(
      <Comp color='secondary' name='item' placeholder={placeholder} clearOnSubmit />,
    )
  }

  const handleSubmit = ({ item }) => {
    const dataCopy = data.slice()
    // 1.dont add if already exists
    if (!dataCopy.some((el) => el[itemComponentTextKey] === item) && item !== '') {
      const newItem = { [itemComponentTextKey]: item }
      //2. add to array
      dataCopy.push(newItem)
      setdata(dataCopy)
      onItemAdded(newItem)
    }
  }

  const handleItemClick = (e) => {
    onItemClick()
    removeItemOnClick && removeitem(e)
  }

  const removeitem = ({ item, index }) => {
    const dataCopy = data.slice()
    dataCopy.splice(index, 1)
    setdata(dataCopy)
    onItemRemoved(item)
  }

  return (
    <Wrapper>
      <List
        overflows
        data={data}
        direction='column'
        ItemComponent={ItemComponent}
        onItemClick={handleItemClick}
      />
      {editable && <Form onSubmitSuccess={handleSubmit}>{TextField && TextField}</Form>}
    </Wrapper>
  )
}

Collection.defaultProps = defaultProps
Collection.propTypes = propTypes

export default Collection
