//  add hotel details
let hotel_details=[
                {
                    hotel_name:'Arya Bhavan',
                    "catagory":'Vegitarian',
                    "menu":[
                            {
                                "id":1,
                                "title":"minitiffen",  
                                "price":"Rs.100",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSnUAkx4U98-ZWx62XwcOxQCzAy11o_v6ZQ&usqp=CAU",
                                "serve_for":2,
                                "description":"Pure veg,2 mini-idly,min-pongal,mini-dosa,tea"
                            },
                            {
                                "id":2,
                                "title":"ghee-roast",
                                "price":"Rs.100",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMusVeqg1cRnYPMGewYphXJ_mxTnMLmNUhQ&usqp=CAU",
                                "serve_for":1,
                                "description":"Pure veg,with 3varity of chutneys"
                            },
                            {
                                "id":3,
                                "title":"panner masaala",
                                "price":"Rs.170",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWLUMPrhNAZyZm9XdvxFEBhyDyHv2LfFk2g&usqp=CAU",
                                "serve_for":1,
                                "description":"Pure veg,panner gravy with little peices"
                            
                            }]
                },
                {
                    hotel_name:'Odel Restarunt',
                    "catagory":['Vegitarian','Non-vegitarian'],
                    "menu":[
                            {
                                "id":4,
                                "title":"chicken briyani",
                                "price":"Rs.210",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh5zbgs8lxJDF_RI2BuYbT1GtYDFx6hYiyQ&usqp=CAU",
                                "serve_for":2,
                                "description":"Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
                            },
                            {
                                "id":5,
                                "title":"mutton sukka",
                                "price":"Rs.370",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfUN409nhOOYXX6u-3wdWHTyvqayhU3HxRw&usqp=CAU",
                                "serve_for":2,
                                "description":"Non-veg,onion raitha,brinjal gravy,1egg,2chicken peices"
                            },
                            {
                                "id":6,
                                "title":"protta with beef gravy",
                                "price":"Rs.230",
                                "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tCQzMfriidsdOx5xPmi13DZuJ6i7AH2kgQ&usqp=CAU",
                                "serve_for":2,
                                "description":"non-veg,3protta,beef gravy,little peice of onions"
                            }]
                },
                {
                    hotel_name:'Dominos Pizza',
                    "catagory":['Vegitarian','Non-vegitarian'],
                    "menu":[
                            {
                                "id":7,
                                "title":"cheesy corn",
                                "price":"Rs.150",
                                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ukiq6hopfqwmem48yjj3",
                                "serve_for":2,
                                "description":"Pure veg,corn,cheese"
                            },
                            {
                                "id":8,
                                "title":"tandoori chicken",
                                "price":"Rs.300",
                                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nvocia0tbadvv8forqne",
                                "serve_for":2,
                                "description":"Crisp, roasted chicken wings in classic hot sauce and peri-peri flavour"
                            },
                            {
                                "id":9,
                                "title":"Creamy Tomato Pasta Veg",
                                "price":"Rs.120",
                                "img":"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vyjjd29lce6zdpqlx4k9",
                                "serve_for":1,
                                "description":"Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle"
                            }]
                },

]
console.log(hotel_details)
    
// ADD PRODUCTS TO LOCAL STORAGE 
   
    function product_display(){
        if(!localStorage.getItem("product_detail")){
            localStorage.setItem('product_detail',JSON.stringify(hotel_details));
            }
             let product_list=JSON.parse(localStorage.getItem("product_detail"))
             console.log(product_list)
            }
    product_display()
        

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
    }}
}
function returnCards(){
    let product_list=JSON.parse(localStorage.getItem("product_detail"));
     let product = ''
    for (let i = 0; i <product_list.length; i++) {

        product +='<div class="row"><div class="card mt-4 col-4 p-0"><img id="url" src="'+product_list[i].menu[i].img+'" class="card-img-top"><div class="card-body"><a class="card-text font-weight-bold" id="content" href="id.html?hotel_name='+product_list[i].hotel_name+'">'+product_list[i].hotel_name+'</a><br/><a class="card-text font-weight-bold" id="content" href="id.html?hotel_name='+product_list[i].hotel_name+'">'+product_list[i].catagory+'</a></div><div class="card-footer bg-white border-0"><small class="text-muted">'+'</small></div></div></div>'
        
        
        
    }
    // return "<div class=\"products-cards  row\">" +product_list.map(title=> `
    // <div class=\"card-item\" text-center col-3"><div class="product-header"><a href="id.html?hotel_name="  title.hotel_name}"><img src="{title.img}"/></a></div><div class="product-content"><h4>${title.price}</h4><p>${title.serve_for}</p><p>${title.description}</p></div></div>`).join('') + "</div>";
    document.getElementById("display").innerHTML = product;
  }
  returnCards();
//   document.getElementById("main").innerHTML = returnCards(product_list);
 
 
//  store id  value to localstorage
 
//  function local_display(){
//     if(!localStorage.getItem("hotel_id")){
//      localStorage.setItem("hotel_id",JSON.stringify([]));
//      let id_val=JSON.parse(localStorage.getItem("hotel_id"));
//      for ( i = 0; i <hotel_details.length; i++){
//          id_val.push(hotel_details[i].id);
//          console.log(id_val)
//      }
//      localStorage.setItem("hotel_id",JSON.stringify(id_val));
//     }
//   }
//   local_display()

//  VALUES CALL BY ID

//  function getid(){
//          let element="";
//          let list_id=JSON.parse(localStorage.getItem("hotel_id"));
//          console.log(list_id)
//          for(let i=0;i<list_id.length;i++){
//              element=element+" <a href='id.html?id="+list_id[i].id +"</a>"
//              alert(list_id[i].id);
//          }

// }


  
