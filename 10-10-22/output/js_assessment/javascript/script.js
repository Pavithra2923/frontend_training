// add hotel details
var hotel_details=[{
    "id":1,
    "hotel_name":"Arya Bhavan",
    "categories":"Vegiterian",
    "location":"Vadasery"},
    {
    "id":2,
    "hotel_name":"KFC",
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
// store id value to localstorage
let id_val = [];
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
}
local_display();