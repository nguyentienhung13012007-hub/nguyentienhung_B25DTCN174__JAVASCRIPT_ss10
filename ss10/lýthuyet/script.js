let array=[];//thông qua index
console.log(typeof array);

// object: thuộc tính (key-tên của thuộc tính:value-giá trị thuộc tính )

// khởi tạo obj
let person= {};
let person_v2= {
    id:0,
    fullName:"đạt bé bỏng",
    age:18,
    sex:"male",
};
console.log( person_v2);

// CRUD:creat-read-update-delete

// read


// Dot notation với Bracket notation
// cách 1: dot notation
console.log(`tên của bạn là:${person_v2.fullName}`);
// cách 2 :bracket notation
console.log(`tên của bạn theo cách 2 là:${person_v2["fullName"]}`);

// create

person_v2.email="datdz@gmail.com";
person_v2.handleSay=()=>{
    console.log("xin chào các bạn mình là đạt bé bỏng ");
    
};
console.log(person_v2.handleSay());

// update
person_v2.age=20;
// delete 
delete person_v2["fullName"];
console.log(person_v2);


let animalDog={
    name: "Join",
    age: 2,

};
let person_v5={
    email: "ádf@gmail.com",
}
let animalCat={

    ...animalDog,
    ...person_v5,
    age: 3,
    id: 0,
};
console.log(animalCat);

// array obj
const players=[
    {id: 0,name:"đạt bé bỏng",age:19,goals:-1},

    {id: 1,name:"bệu",age:19,goals:1},
]
// in ra màn hình các cầu thủ phản lưới nhà 
// hiển thị theo format tên -số bàn phản lưới 
let listPlayer=players.filter((player)=>{
return player.goals<0;
});
listPlayer.forEach((player)=>{
console.log(`${player.name}-${player.goals}`);

});

// obj lồng 
let person_max ={
    id:1,
    fullName:{
        firstName:"đạt",
        lastName:"bé bỏng ",
    },

};
console.log(person_max.fullName.firstName);

// duyệt qua obj

console.log(Object.keys(person_v2));
console.log(Object.values(person_v2));
console.log(Object.entries(person_v2));
for(const[key,value]of Object.entries(person_v2)){
    console.log(key,value);
}