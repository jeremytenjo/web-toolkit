import React, { useState, useEffect } from 'react'

import Form from '../../../../Form/Ui/React/form.index'
import TextField from '../../../../Form/Text-Field/Ui/React/textField.index'
import List from '../../../../../Data-Display/List/Ui/React/list.index'

import { defaultProps, propTypes } from './collection.propTypes'
import { Wrapper } from './collection.styles'

const Collection = ({ data, onClick, itemComponent, onItemAdded }) => {
  const [items, setitems] = useState([])

  const handleSubmit = ({ item }) => {
    // 1.dont add if already exists

    //2. add to array

    //3. send event with item added data

    //4 clear field
    onItemAdded()
    console.log(item)
  }
  return (
    <Wrapper>
      <List
        overflows
        data={data}
        direction='column'
        ItemComponent={itemComponent}
        onItemClick={onClick}
      />
      <Form onSubmit={handleSubmit}>
        <TextField color='secondary' name='item' />
      </Form>
    </Wrapper>
  )
}

Collection.defaultProps = defaultProps
Collection.propTypes = propTypes

export default Collection
