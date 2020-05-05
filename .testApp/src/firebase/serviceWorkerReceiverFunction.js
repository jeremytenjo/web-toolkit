module.exports = `
const {
  data: { title, actions },
} = payload
const parseActions = JSON.parse(actions)
const options = { icon: '/images/public/logo_192x192.png', actions: parseActions }
`
