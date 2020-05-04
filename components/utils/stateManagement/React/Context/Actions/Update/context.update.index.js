export default async ({ state = [], id, toUpdate }) => {
  let newState = state.slice()
  let itemIndex = newState.findIndex((item) => item.id === id)

  for (let [key, value] of Object.entries(toUpdate)) {
    newState[itemIndex][key] = value
  }

  return newState
}
