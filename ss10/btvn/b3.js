const players=[
    {name: "messi",position:"Forward",age:36,goals:25,assitist:15,matches:34},
    {name: "Ronaldo",position:"Forward",age:39,goals:30,assitist:10,matches:38},
    {name: "Neymar",position:"Forward",age:32,goals:18,assitist:20,matches:32},
    {name: "De Bruyne",position:"Midfielde",age:33,goals:8,assitist:25,matches:35},
    {name: "Kante",position:"Midfielde",age:33,goals:2,assitist:5,matches:36},
    {name: "Van Dijk",position:"Defender",age:33,goals:5,assitist:3,matches:33},
    {name: "Alisson",position:"Goalkeeper",age:31,goals:0,assitist:1,matches:37},
];

const getFilteredTotalGoals=(minGoals,player)=>{
    let listPlayers=player.filter((element)=>{
        return element.goals>=minGoals;

    });
    let totalGoals=listPlayers.reduce((cur,player)=>{
        return cur+player.goals;


    },0);
console.log(`Tổng các bàn thắng của các cầu thủ đạt đủ chỉ tiêu là : ${totalGoals}`);


};
getFilteredTotalGoals(50,players); 