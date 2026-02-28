const players = [
  { name: "Messi", years: 18, salary: 100 },
  { name: "Ronaldo", years: 20, salary: 95 },
  { name: "Neymar", years: 12, salary: 90 },
  { name: "Mbappe", years: 7, salary: 85 },
  { name: "Haaland", years: 5, salary: 80 },
  { name: "Modric", years: 22, salary: 70 },
  { name: "Benzema", years: 19, salary: 75 },
];
const analyzeSalary = (minYears, teamPlayers) => {
    let listPlayers = teamPlayers.filter((player)=>
        {player.years >= minYears});
     if(listPlayers.length===0){
        return{
            totalSalary: 0,
        highestPaid: null,
        lowestPaid: null
        };
    };
    let sumSalary = listPlayers.reduce((sum, player) =>
        {sum + player.salary
        }, 0);

    const highest = listPlayers.reduce((max, player) =>
        {player.salary > max.salary ? player : max
    
    }    );

    const lowest = listPlayers.reduce((min, player) =>
        {player.salary < min.salary ? player : min
});

    return {
        totalSalary: sumSalary,
        highestPaid: highest,
        lowestPaid: lowest
    };
   
};

console.log(analyzeSalary(30, players));
