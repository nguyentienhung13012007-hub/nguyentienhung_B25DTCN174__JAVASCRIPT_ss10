let squad = [

    { id: 1, name: "Nguyen Van A", goals: 10, position: "FW" },

    { id: 2, name: "Tran Van B", goals: 5,  position: "MF" },

    { id: 3, name: "Le Van C",   goals: 0,  position: "DF" },

    { id: 4, name: "Pham Van D", goals: 12, position: "FW" },

    { id: 5, name: "Dang Van E", goals: 0,  position: "GK" }

];
// case1
const displayListPerson=(listPlayers)=>{
    listPlayers.forEach((player)=>{
        console.log(`mã ${player.id}-${player.name}(${player.position}):${player.goals} bàn.`);
        
    });
};
// case2: thêm cầu thủ mới vào mảng:phải áp dụng push(cầu thủ mới)
const addplayer=(listPlayer)=>{
    let newName=prompt("Nhập tên mới");
    let  newGoals=+prompt("Nhập bàn thắng");
    let  newPos=prompt("Nhập vị trí ");
    let newPlayer={
        id  : listPlayer.length+1,
        name: newName,
        goals: newGoals,
        position: newPos,

    };
    listPlayer.push(newPlayer)
console.log(listPlayer);


};
// case 3
// tìm cầu thủ theo Id
const findPlayer = (listPlayers) => {
    let Id = +prompt("Nhập id cần tìm:"); 
    const foundPlayer = listPlayers.find(player => 
        player.id === Id
    );
    if (foundPlayer) {
        console.log("Tìm thấy:", foundPlayer);
    } else {
        console.error("Không tìm thấy cầu thủ!");
    }
};

// case 4: cập nhật 
const updatePlayer=(listPlayer)=>{
let update=+prompt("Nhập id cầu thủ vừa ghi bàn");
const findPlayer=listPlayer.find(player=>
    update===player.id

);
if (findPlayer) {
        findPlayer.goals+=1;
        console.log(`đã cập nhật bàn thắng cho ${findPlayer.name} thành ${findPlayer.goals}`);
        
    } else {
        console.error("Không tìm thấy cầu thủ!");
    }
};


// case 5:chuyển nhượng 
const deletePlayer = (listPlayer) => {
    let id = +prompt("Nhập id cầu thủ cần xoá");

    const index = listPlayer.findIndex(player => player.id === id);

    if (index !== -1) {
        const removed = listPlayer.splice(index, 1);

        console.log(`Đã xoá cầu thủ ${removed[0].name}`);
    } else {
        console.error("Không tìm thấy cầu thủ!");
    }
};



let choice;

const displayMenu=()=>{
    choice =+prompt(`
--- FOOTBALL MANAGER PRO ---

1. Xem đội hình

2. Thêm cầu thủ

3. Tìm kiếm (theo ID)

4. Cập nhật bàn thắng

5. Xóa cầu thủ (Chuyển nhượng)

0. Thoát
        `);
};
do {
    displayMenu();

    switch (choice) {
        case 1:
            displayListPerson(squad);
            break;
        case 2:
            addplayer(squad);
            break;
        case 3:
            findPlayer(squad);
            break;
        case 4:
            updatePlayer(squad);
            break;
        case 5:
            deletePlayer(squad);
            break;
        case 0:
            console.log("thoát");
            
            break;
    
        default:
            console.log("lựa chọn không hợp lệ");
            
            break;
    }
} while (choice!==0);