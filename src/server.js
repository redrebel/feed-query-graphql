import {GraphQLServer } from 'graphql-yoga'
import schema from './schema'

const options = {
  port: 8000,
  endpoint: '/graphql',
  subscriptions: '/subscriptions',
  playground: '/playground',
}

const server = new GraphQLServer({schema})

server.start(options, ({ port }) => 
  console.log(
    `Server started, listening on port ${port} for incoming requests.`,
  )
)