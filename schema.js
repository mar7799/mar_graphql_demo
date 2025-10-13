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
    reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
        game_id: ID!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
        games: [Game!]
    }
    type Query {
        reviews: [Review]
        review(rating: Int!): Review
        games: [Game]
        game(title: String!): Game
        authors: [Author]
        author(name: String!): Author
    }
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: GameInput): Game
        updateGame(id: ID!, edits: EditGameInput!): Game
    }
    input GameInput {
        title: String!
        platform: [String!]!
    }
    input EditGameInput {
        title: String
        platform: [String!]
    }
`

