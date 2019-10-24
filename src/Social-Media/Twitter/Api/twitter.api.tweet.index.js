const initTwitterApi = require('./twitter.api')

module.exports = ({ tweet, twitterApiConfig }) => {
  const twitterApi = initTwitterApi({ twitterApiConfig })

  twitterApi.post('statuses/update', { status: tweet }, (err) => {
    if (err) console.log(`Error: ${err}`)
    else console.log(`Tweet successfully sent`)
  })
}
