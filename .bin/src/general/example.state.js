import React, { useState, createContext, useContext } from 'react'

export const ExampleContext = createContext(null)

const initState = {
  id: '',
  displayName: '',
  phone_number: '',
  email: '',
  location: '',
  categories: [],
  rating: 0,
  photoURL: '',
}

export const ExampleProvider = ({ children }) => {
  // State
  const [user, setExample] = useState(initState)

  // Functions
  const updateExample = (data) => setExample(data)

  return (
    <ExampleContext.Provider
      value={{
        user,
        updateExample,
      }}
    >
      {children}
    </ExampleContext.Provider>
  )
}

export default () => useContext(ExampleContext)
