const { client } = require('../_utils')

const bookQueries = require('./_book.queries')

module.exports = async (req, res) => {
  const { id } = req.query

  const variables = {
    id
  }

  const { findBookByID } = await client.request(bookQueries.getBook, variables)

  res.status(200).json(findBookByID)
}