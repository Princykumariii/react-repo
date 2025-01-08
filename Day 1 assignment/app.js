// Declare variables using const and let

const user = {
    name : "john",age :20,
    city:"Patna"
};

let isAdmin = false;

// update user
function updateUser({name,age,city},newcity){
    return{
        name,
        age,
        city:newcity
    };
}
const updateUser = updateUser(user,{age})

// uses of arrow function

const printUserInfo =(user)=> {
    console.log(`Name :${user.name},Age :${user.age},City :${user.city}`);

};

// using map method
const users = [
    {name :"Alice", age:25},
    {name :"Bob", age:20},
    {name :"charlie", age:35},
];
const userNames = users.map(user=>user.name);
console.log(userNames);

// using setTimeout

async function fetchUsers(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(users);
        },1000)
    });
}

async function main(){
const fetchUsers = await fetchUsers();
console.log(fetchedUsers);
    
}
main();
  