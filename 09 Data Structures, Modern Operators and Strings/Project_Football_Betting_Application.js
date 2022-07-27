const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
        ],
        [
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
            'Ashar',
        ],
    ],
    score: '4:0',
    scored: ['Ashar', 'Ashar', 'Ashar', 'Ashar'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// TASK 1 : Create a one player array for each team (Variables 'player1' and 'player2')
const [player1, player2] = game.players;


//TASK 2 : the first player in any player array is the goalkeeper and the others are field players. for ashar(team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field player.
const [gk, ...fieldPlayers] = player1;  // here we are using the concept of rest.


//TASK 3 : Create an array 'allPlayers' containing all players of both teams(22 player)
const allPlayers = [...player1, ...player2];

//TASK 4 : During the game, Ashar (team 1) used 3 substitute players, so create a new array ('players1Final') containing all the original team1 player plus 'Ashar', 'Ashar' and 'Ashar';
const players1Final = [...player1,'Ashar','Ashar','Ashar'];

//TASK 5 : Based on the game.odds object, create one variable for each odd (called 'team1','draw' and 'team2').
/* for this we are going to use the nested destructuring */
const {odds: {team1, x: draw, team2}} = game;


// TASK 6 : Write a function ('printGoals') that recieves an arbitary number of player names (NOT an array) and prints each of them to the console, along with the number of goals who were scored in total (number of player names passed in).
const printGoals = (...players) => {  // here we are using the rest paramete it will aggregate all the incoming value into an array.
    console.log(players);
    console.log(`${players.length} goals were scored.`);
}
printGoals(...game.scored);


// TASK 7 : The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternery operator.
team1 < team2 && console.log("Team 1 is more likely to win");  // using and opeartor because it short when the first value is true.
team1 > team2 && console.log("Team 2 is more likely to win");