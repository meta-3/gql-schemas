import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    hello: (_: any, { name }) => {
      const returnValue = `Hello ${name || 'World!'}`
      return returnValue
    },

    async organizations(_: any, {}) {
      return []
    },

    async organization(_: any, { id }) {
      return {}
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})

server.start(() => console.log('Server is running on http://localhost:4000'))
