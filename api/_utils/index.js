const request = require('graphql-request')

const secret = process.env.FAUNADB_SECRET_KEY

const urlApi = process.env.FAUNADB_API

const client = new request.GraphQLClient(urlApi, {
  headers: {
    authorization: `Bearer ${secret}`
  }
})

module.exports = {
  client
}