import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

console.log("TypeDefs:", typeDefs);
console.log("Resolvers:", resolvers);

async function startServer() {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`🚀 Server ready at: ${url}`);
  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
}

startServer();
