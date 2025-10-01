import {db} from './_db.js';

export const resolvers = {
    Query: {
        games() {
            return db.games        
        },
    reviews(){
        return db.reviews;
    },
    authors(){
        return db.authors
    },
    review(_, args)
    {
    return db.reviews.find((review) => review.id === args.id);
    },
    game(_, args){
        return db.games.find((game) => game.title === args.title);
    },
    author(_, args){
        return db.authors.find((author) => author.name === args.name);
    }
},
    Game: {
        reviews(parent) {
            return db.reviews.filter((r) => r.game_id === parent.id);
        }
    },
    Author:{
        reviews(parent) {
            return db.reviews.filter((r) => r.author_id === parent.id);
    },
    games(parent) {
        return db.games.filter((game) => parent.games.includes(game.id));
    }
}

}