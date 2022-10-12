//  add hotel details
var hotel_details=[{
    "id":1,
    "hotel_name":"Arya Bhavan",
    "categories":"Vegiterian",
    "location":"Vadasery"},
    {
    "id":2,
    "hotel_name":"Dominos",
    "categories":["Vegiterian","Non-Vegiterian"],
    "location":"Nagercoil"
    },
    {
    "id":3,
    "hotel_name":"Odel",
    "categories":["Vegiterian","Non-Vegiterian"],
    "location":"Nagercoil"
    }
]
// SCRIPT FOR STORE SIGNUP DETAILS IN LOCAL STORAGE
  if(!localStorage.getItem("user")){
    localStorage.setItem("user",JSON.stringify([]));
}
const list=JSON.parse(localStorage.getItem("user"));
function addElement(){
    const details={
        name:document.getElementById('sname').value,
        email:document.getElementById('smail').value,
        pwd:document.getElementById('spwd').value,
        srepeat:document.getElementById('srepeat').value,
         };
    list.push(details);
    localStorage.setItem("user",JSON.stringify(list))
    alert("Successfully Registered")
    
 }
// LOGIN SCRIPT
 
 function loginUser(){
    let loginEmail=document.getElementById('login-email').value;
    let loginPass=document.getElementById('login-pass').value;
  if(localStorage.getItem('user')){
     let login_user=JSON.parse(localStorage.getItem('user'));
     for(let i=0;i<login_user.length;i++){
        if(loginEmail === login_user[i].email && loginPass ===login_user[i].pwd) {
            window.location.replace("home.html"); 
            break;
        }else{
            alert("please username and password check");
            break;
        }
    }
    }else{
        console.log('Not a registered user')
    }
 }
 
// store id value to localstorage
 let id_val =[];
 function test() {
     for ( i = 0; i <hotel_details.length; i++){
        id_val.push(hotel_details[i].id);
     }
     console.log(id_val)
 }
 test();
 function local_display(){
   if(!localStorage.getItem("hotel_id")){
   localStorage.setItem("hotel_id",JSON.stringify([]))
   }
   let hotel_list=JSON.parse(localStorage.getItem("hotel_id"))
   hotel_list.push(id_val)
   localStorage.setItem("hotel_id",JSON.stringify(hotel_list));
 }local_display()

// VALUES CALL BY ID

function getid(){
    let element=""
    let list_id=JSON.parse(localStorage.getItem("hotel_id"))
    console.log(list_id)
    for(let i=0;i<list_id.length;i++){
        console.log(i)
}
}getid()

  
