import React, { useState, useEffect } from 'react'

import Form from '../../../Form/Ui/React/form.index'
import List from '../../../../Data-Display/List/Ui/React/list.index'

import { defaultProps, propTypes } from './collection.propTypes'
import { Wrapper } from './collection.styles'

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
    let { default: Comp } = await import(`../../../Form/Text-Field/Ui/React/Styles/${textFieldStyle}`)
    setTextField(<Comp color='secondary' name='item' placeholder={placeholder} clearOnSubmit />)
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
      <List overflows data={data} direction='column' ItemComponent={ItemComponent} onItemClick={handleItemClick} />
      {editable && <Form onSubmitSuccess={handleSubmit}>{TextField && TextField}</Form>}
    </Wrapper>
  )
}

Collection.defaultProps = defaultProps
Collection.propTypes = propTypes

export default Collection
