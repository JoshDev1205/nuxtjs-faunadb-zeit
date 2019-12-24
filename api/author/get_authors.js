const { client } = require('../_utils.js')

const authorQueries = require('./_author.queries')

module.exports = async (req, res) => {
  const { allAuthors: { data } } = await client.request(authorQueries.getAllAuthors)

  res.status(200).json(data)
}