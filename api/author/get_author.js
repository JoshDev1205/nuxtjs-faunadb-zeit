const { client } = require('../_utils')

const authorQueries = require('./_author.queries')

module.exports = async (req, res) => {
  const { id } = req.query

  const variables = {
    id
  }

  const { findAuthorByID } = await client.request(authorQueries.getAuthor, variables)

  res.status(200).json(findAuthorByID)
}