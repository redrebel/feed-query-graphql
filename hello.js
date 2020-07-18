const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    me: User
  }
  
  type User {
    id: ID
    name: String!
  }`

  const resolvers = {
    Query: {
      hello: (_, { name }) => `Hello ${name || 'World'}`,
      me: () => {
        let user = {
          id: 'red',
          name: 'junggeun lee'
        }
        return user;
      }
    }
  }

  const options = {
    port: 5000,
    endpoint: '/graphql',
    subscriptions: '/subscriptions',
    playground: '/playground',
  }

  const server = new GraphQLServer({ typeDefs, resolvers })

  server.start(options, ({ port }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests.`,
    ),
  )