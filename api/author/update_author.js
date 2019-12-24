const { client } = require('../_utils.js')

const authorQueries = require('./_author.queries')

module.exports = async (req, res) => {
  const { name, country } = req.body
  const { id } = req.query

  const variables = {
    id,
    name,
    country
  }

  const { updateAuthor } = await client.request(authorQueries.updateAuthor, variables)

  res.status(200).json(updateAuthor)
}