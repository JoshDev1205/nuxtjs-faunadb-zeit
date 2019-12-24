const createBook = `
  mutation createBook ( $title: String!, $description: String!, $quantity: Int, $price: Int, $authorId: ID!) {
    createBook(
      data: {
        title: $title,
        description: $description,
        quantity: $quantity,
        price: $price,
        author: {
          connect: $authorId
        }
      }
    ){
      _id
      title
      description
      quantity
      price
      author {
        _id
        name
        country
      }
    }
  }
`

const getAllBooks = `
 { 
   allBooks {
    data {
      _id
      title
      description
      quantity
      price
      author {
        name
        country
      }
    }
  }
}
`

const getBook = `
  query getBook($id: ID!) {
    findBookByID (id: $id) {
      _id
      title
      description
      quantity
      price
      author {
        _id
      }
    }
  }
`
const updateBook = `
  mutation updateBook ($id: ID!, $title: String!, $description: String!, $quantity: Int, $price: Int, $authorId: ID!) {
    updateBook(
      id: $id,
      data: {
        title: $title,
        description: $description,
        quantity: $quantity,
        price: $price,
        author: {
          connect: $authorId
        }
      }
    ) {
      _id
      title
      description
      quantity
      price
      author {
        _id
        name
        country
      }
    }
  }
`

const deleteBook = `
  mutation deleteBook ($id: ID!) {
    deleteBook (
      id: $id
    ){
      _id
    }
  }
`

module.exports = {
  createBook,
  getAllBooks,
  getBook,
  deleteBook,
  updateBook
}