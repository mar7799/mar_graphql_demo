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
},
    Mutation: {
        deleteGame(_, args) {
        let game = db.games.find((g)=> g.id === args.id)
        let index = db.games.indexOf(game)
        if(game){
            db.games.splice(index, 1)
        }
        return db.games
        },
        addGame(_, args) {
            // console.log("args", args)
            let game = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.games.push({
                game
            });
        return game;
    },
    updateGame(_, args) {
        db.games = db.games.map((game) => {
            if(game.id === args.id){
                return {
                    ...game,
                    ...args.edits
                }
            }
            return game;
        });
        return db.games.find((game) => game.id === args.id);
    }

}
}