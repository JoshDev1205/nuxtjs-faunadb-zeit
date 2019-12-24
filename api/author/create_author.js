const { client } = require('../_utils.js')

const authorQueries = require('./_author.queries')

module.exports = async (req, res) => {
  const { name, country } = req.body

  const variables = {
    name,
    country
  }

  const { createAuthor } = await client.request(authorQueries.createAuthor, variables)

  res.status(200).json(createAuthor)
}
