const createAuthor = `
  mutation createAuthor($name: String!, $country: String!) {
    createAuthor(data: {
      name: $name,
      country: $country,
    }){
      _id,
      name
      country
    }
  }
`

const getAllAuthors = `{
  allAuthors {
    data {
      _id
      name
      country
      books {
        data {
          _id
          title
        }
      }
    }
  }
}`

const updateAuthor = `
  mutation updateAuthor($id: ID!, $name: String!, $country: String!) {
    updateAuthor(id: $id, data: {
      name: $name,
      country: $country,
    }){
      _id,
      name
      country
    }
  }
`

const getAuthor = `
  query getAuthor($id: ID!) {
    findAuthorByID (id: $id) {
      _id
      name
      country
      books {
        data {
            _id
            title
          }
      }
    }
  }
`

module.exports = {
  createAuthor,
  getAllAuthors,
  updateAuthor,
  getAuthor
}