let games = [
    {id: '1', title: 'The Legend of Zelda: Breath of the Wild', platform: ['Nintendo Switch', 'Wii U']
    },
    {
        id: '2', title: 'God of War', platform: ['PlayStation 4']
    },
    {
        id: '3', title: 'Red Dead Redemption 2', platform: ['PlayStation 4', 'Xbox One', 'PC']
    },
    {
    id: '4', title: 'The Witcher 3: Wild Hunt', platform: ['PlayStation 4', 'Xbox One', 'PC', 'Nintendo Switch']
    },
    {id: '5', title: 'Minecraft', platform: ['PC', 'PlayStation 4', 'Xbox One', 'Nintendo Switch', 'Mobile']}
]

let authors = [
    {id: '1', name: 'John Doe', verified: true, games: ['1', '2']},
    {id: '2', name: 'Jane Smith', verified: false, games: ['3', '4']},
    {id: '3', name: 'Alice Johnson', verified: true, games: ['5']},
    {id: '4', name: 'Bob Brown', verified: false, games: ['1', '3']},
    {id: '5', name: 'Charlie Davis', verified: true, games: ['2', '4', '5']}
]

let reviews = [
    {id: '1', rating: 5, content: 'Amazing game! A must-play for everyone.',author_id: '1', game_id: '1'},
    {id: '2', rating: 4, content: 'Great game with a few minor issues.',author_id: '2', game_id: '2'},
    {id: '3', rating: 3, content: 'Good game but could be better.',author_id: '3', game_id: '3'},
    {id: '4', rating: 2, content: 'Not my cup of tea, found it boring.',author_id: '4', game_id: '4'},
    {id: '5', rating: 1, content: 'Terrible game, do not waste your money.',author_id: '5', game_id: '5'},
    {id: '6', rating: 5, content: 'An instant classic! Loved every moment.',author_id: '5', game_id: '5'},
    {id: '7', rating: 4, content: 'Very enjoyable with stunning visuals.',author_id: '4', game_id: '4'},
    {id: '8', rating: 3, content: 'Average experience, nothing special.',author_id: '3', game_id: '3'},
    {id: '9', rating: 2, content: 'Disappointing, expected much more.',author_id: '2', game_id: '2'},
    {id: '10', rating: 1, content: 'Worst game I have ever played.',author_id: '1', game_id: '1'}
]

export const db = {games, authors, reviews};