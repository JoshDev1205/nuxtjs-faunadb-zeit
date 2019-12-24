const { client } = require('../_utils.js')

const bookQueries = require('./_book.queries')

module.exports = async (req, res) => {
  const { id } = req.query
  const { title, description, quantity, author: { _id: authorId }, price } = req.body

  const variables = {
    id,
    title,
    description,
    quantity,
    authorId,
    price
  }

  const { updateBook } = await client.request(bookQueries.updateBook, variables)

  res.status(200).json(updateBook)
}