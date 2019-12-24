const { client } = require('../_utils.js')

const bookQueries = require('./_book.queries')

module.exports = async (req, res) => {
  const { title, description, quantity, author: authorId, price } = req.body

  const variables = {
    title,
    description,
    quantity,
    authorId,
    price
  }

  const { createBook } = await client.request(bookQueries.createBook, variables)

  res.status(200).json(createBook)
}