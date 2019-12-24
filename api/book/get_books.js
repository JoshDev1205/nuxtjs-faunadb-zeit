const { client } = require('../_utils.js')

const bookQueries = require('./_book.queries')

module.exports = async (req, res) => {
  const { allBooks: { data } } = await client.request(bookQueries.getAllBooks)

  res.status(200).json(data)
}