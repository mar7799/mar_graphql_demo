// int, float, string, boolean, id - types of data in GraphQL
// type Query - the entry point for all read operations in GraphQL
// type Mutation - the entry point for all write operations in GraphQL
// ! - non-nullable field, must always have a value
// [] - list of items, can be empty or null

export const typeDefs =`#graphql
    type Game{
    id: ID! 
    title: String!
    platform: [String!]!
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }
    type Query {
        reviews: [Review]
        games: [Game]
        authors: [Author]
    }`

