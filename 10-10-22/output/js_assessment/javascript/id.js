let product_list = JSON.parse(localStorage.getItem('product_detail'));
      const  queryString = window.location.search;
      const  urlParams = new URLSearchParams(queryString);
               
      const  hotel= urlParams.get("hotel_name")
      let product_menu=JSON.parse(localStorage.getItem("product_detail"));
      let element="";
      for(let i=0;i<product_menu.length;i++){
          if(hotel==product_menu[i].hotel_name){
           for(let j=0; j<product_list[i].menu.length;j++){
          
            element +='<div class="card mt-5 mr-auto ml-auto mb-5 col-3 p-0"><img id="url" src="'+product_menu[i].menu[j].img+
           '" class="card-img-top"><div class="card-body"><a class="card-text font-weight-bold" style="color:black;text-decoration:none" id="content" href="id.html?hotel_name='
             +product_menu[i].hotel_name+'">'+'Hotel_name  :  ' +product_menu[i].hotel_name+'</a><br/><a class="card-text font-weight-bold" style="color:black;text-decoration:none" id="content" href="id.html?hotel_name='+product_menu[i].hotel_name+'">'
               +'Title  : '+product_list[i].menu[j].title+'</a><br><a class="card-text font-weight-bold" style="color:black;text-decoration:none" id="content" href="id.html?hotel_name='+product_menu[i].hotel_name+'">'
               +'Price  : '+product_list[i].menu[j].price+'</a><br><a class="card-text font-weight-bold" style="color:black;text-decoration:none" id="content" href="id.html?hotel_name='+product_menu[i].hotel_name+'">'
               +'Serve_for  : '+product_list[i].menu[j].serve_for+'</a><br><a class="card-text font-weight-bold" style="color:black;text-decoration:none" id="content" href="id.html?hotel_name='+product_menu[i].hotel_name+'">'
               +'Desc  :  '+product_list[i].menu[j].description+'</a></div><div class="card-footer bg-white border-0"><small class="text-muted">'+'<a class="btn btn-primary" onclick="addCart('+ i +','+j+')">ADD to cart</a></small></div></div>'
         }
        }
        }
        
        document.getElementById("items").innerHTML=element




        if(!localStorage.getItem('cart_item')){
            localStorage.setItem('cart_item',JSON.stringify([]))
          }

          let cart_value=JSON.parse(localStorage.getItem('cart_item'))
          function addCart(index,key){
            let cart=JSON.parse(localStorage.getItem('product_detail'))
            console.log(cart)
            cart_value.push(cart[index].menu[key])
            console.log(cart_value)
            localStorage.setItem('cart_item',JSON.stringify(cart_value))    
            window.location.replace("cart.html")
          }