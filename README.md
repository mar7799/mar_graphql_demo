# mar_graphql_demo

This is a poc of graphql using Apollo Server.

To start the server run
npm run dev

you can then start querying the sample data present in the project in the browser

The sample data we have is the games, authors, reviews.

we write a list of queries like:
Games : to fetch a list of games
Game(name) : to fetch a single game based on the name.
Author(name): to fetch a single auhtor based on the name.
Authors: to fetch a list of authors
Review(id): to fetch a review based on the id.
Reviews: to fetch a list of review.

You can also write a nested queries:

Game
{
reviews
{

}
}
Author
{
reviews
{

},
games
{

}
}

Note: you can choose to ignore the data in the query if its in the schema but, not the other way around.
