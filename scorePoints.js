const players = [
    {
    "id": 1,
    "name": "Ivan",
    "scorePoints": 4500
    },
    {
    "id": 2,
    "name": "Petr",
    "scorePoints": 3600
    },
    {
    "id": 3,
    "name": "Vadim",
    "scorePoints": 3433
    },
    {
    "id": 4,
    "name": "Olga",
    "scorePoints": 2356
    },
    {
    "id": 5,
    "name": "Alex",
    "scorePoints": 0
    },
    {
    "id": 6,
    "name": "Maria",
    "scorePoints": 4000
    },
    {
    "id": 7,
    "name": "Sergey",
    "scorePoints": 3500
    },
    {
    "id": 8,
    "name": "Anastasia",
    "scorePoints": 2800
    }
    ];

let scorePointsArr = [];
for (player in players) {
    scorePointsArr.push(players[player].scorePoints)
}
console.log(scorePointsArr);

console.log(Math.max(...scorePointsArr));