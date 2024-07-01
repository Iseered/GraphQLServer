const app = require('./app');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  // Configuración adicional para la ruta /api/graphql
  app.use('/api/graphql', server.getMiddleware({ path: '/' }));

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`);
    console.log(`GraphQL endpoint available at http://localhost:${port}/api/graphql`);
  });
}

startServer();