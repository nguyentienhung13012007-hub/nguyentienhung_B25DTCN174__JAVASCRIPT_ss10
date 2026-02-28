const player = {
  name: "De Bruyne",
  position: "Midfielder",
  goals: 8,
  assists: 25,
  matchesPlayed: 35,
};

const addPerformanceScore = (player) => {

  const performancePerMatch =
    (player.goals + player.assists) / player.matchesPlayed;

  const isKeyPlayer = performancePerMatch >= 1.0 ? true : false;

  console.log(`
name: ${player.name}
position: ${player.position}
goals: ${player.goals}
assists: ${player.assists}
matchesPlayed: ${player.matchesPlayed}
performancPerMatch: ${performancePerMatch.toFixed(2)}
isKeyPlayer: ${isKeyPlayer}
  `);
};

addPerformanceScore(player);