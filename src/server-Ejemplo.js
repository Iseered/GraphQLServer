const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Definición del esquema de GraphQL
const typeDefs = gql`
  type Query {
    countries: [Country]
    country(code: ID!): Country
  }

  type Country {
    code: ID!
    name: String!
    capital: String!
    population: Int
  }
`;



// Resolvers para manejar las queries
const resolvers = {
  Query: {
    countries: () => countries,
    country: (_, { code }) => countries.find(country => country.code === code),
  },
};
// Configuración del servidor Apollo
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
  
    const app = express();
    server.applyMiddleware({ app });
  
    // Inicio del servidor
    app.listen({ port: 4000 }, () =>
      console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
    );
  }
  
  startServer();