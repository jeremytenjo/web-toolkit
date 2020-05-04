export default async ({ state = [], data, location = 'push' }) => {
  let newState = state.slice()
  newState[location](data)
  return newState
}
