const { client } = require('../_utils.js')

const bookQueries = require('./_book.queries')

module.exports = async (req, res) => {
  const { id } = req.query

  const variables = {
    id
  }

  const { deleteBook } = await client.request(bookQueries.deleteBook, variables)

  res.status(200).json({ message: 'Book Deleted' })
}