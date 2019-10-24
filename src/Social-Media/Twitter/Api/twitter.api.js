const twit = require('twit')

module.exports = ({ twitterApiConfig }) => new twit(twitterApiConfig)
