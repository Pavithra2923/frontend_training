var company =[
    {
    "company_name":"comorins",
    "category":"whole-sale",
     "start_year":2001,
     "ending_year":2050},
    {"company_name":"tcs",
    "category":"retail",
    "start_year":1970,
    "ending_year":2030},
    {"company_name":"infosys",
    "category":"retail",
    "start_year":1980,
    "ending_year":2040},
    {"company_name":"zoho",
    "category":"whole-sale",
    "start_year":2010,
    "ending_year":2031},
    {"company_name":"amazon",
    "category":"whole-sale",
    "start_year":2001,
    "ending_year":2030},
    {"company_name":"wipro",
    "category":"retail",
    "start_year":1979,
    "ending_year":2044}
  ]
// part-1 1
        // company.forEach((a) => {
        //    console.log(a.company_name)
        // })

// part-1 2
        // var newArray = company.filter(a=> a.start_year > 1987);
        // newArray.forEach((a) => {
        //     console.log(a.company_name);
        // })

// part 1 4
        // var sorting=company.sort((a, b) => a.ending_year - b.ending_year);
        // console.log(sorting)

// part 1 5
        // var ages =[12,45,78,34,56,33,22,10,55]

        // var dec_sort=ages.sort(function(a, b){return b-a});
        // console.log(dec_sort)

// part 1 6
        // var ages =[12,45,78,34,56,33,22,10,55]

        // var sum = 0;
        // var total_age = ages.reduce((a, b) => a + b,sum);
        // console.log(total_age);

// part 1 8
        // function add(...a){
        //     var sum = 0;
        //     for(var i=0;i<a.length;i++){
        //         sum += a[i];
        //     }
        //     return sum;
        // }
        // console.log(add(2,3));  
        // console.log(add(2,3,7));
        // console.log(add(2,2,4,3));

        // var cat = company.filter(a => a.category === 'retail')
        // // console.log(cat);
        // document.getElementById("main").innerHTML=cat;
    
// part 1 10

    // var person ={
    //     name : "pavi",
    //     street : "abc" 
    //   }
    //    var {street} = person;
    //   console.log(street)

//  part 1 11
  
    // var increment = (function(sum) {
    //     return function() {
    //       sum += 1;
    //       return sum;
    //     }
    //   }
    //   (-1)); 
    //  
    // //   console.log(increment());
    // //   console.log(increment());
    // //   console.log(increment());
    // //   console.log(increment());

    // var i = -1;
    // function increment() {
    //     i++;
    //     document.getElementById('click').value = i;
    // }

// part 2 1
// let sum=(num1,num2=num1+1)=> console.log(num1+num2);

//     sum(2,1);
//     sum(2);

//part 2 2
// class data{
//         constructor(name){
//         this.name=name
//         }
//         static get(){
//             console.log(this.name)
//         }
//     }
//     data.get("This is print without new keyword");

// part 2 3
// let person1 = {
//         name: "pavi",
//         phone:123
//     }
//     let person2 = {
        
//         age : 456,
//         phone :2356
//     }
//     function compare(person1, person2) {
//         for (let i in person2) {
//             if (person1[i] == person2[i]) {
//                 console.log(person1[i])
//                 return true
//             }
//             return false
//         }
//     }
//     console.log(compare(person1,person2))

// part 2 4

// part 2 5

        //  function checkVariable(variable) {
        //          return (variable==null) || (variable==undefined)?"this is null or undef":"not null or not undef"
        //         }
        //         console.log(checkVariable(5),);
        //         console.log(checkVariable(12));
        
// part3 1

        // var user = {
        //         name: 'pavithra',
        //         street : "xyz",
        //         age: 21
        // };
        // for (var key in user) {
        //          console.log(`${key}: ${user[key]}`);
        //     }

// part 3 3
//   console.warn("please update your browser");

// part 3 4
//   console.error("invalid password");

// part 3 5

// var p='welcome'
// console.log(p)

// part 3 7

        // let cur_day;
        // switch (new Date().getDay()) {
        //   case 0:
        //     cur_day = "Sunday";
        //     break;
        //   case 1:
        //     cur_day = "Monday";
        //     break;
        //   case 2:
        //     cur_day = "Tuesday";
        //     break;
        //   case 3:
        //     cur_day = "Wednesday";
        //     break;
        //   case 4:
        //     cur_day = "Thursday";
        //     break;
        //   case 5:
        //     cur_day = "Friday";
        //     break;
        //   case  6:
        //     cur_day = "Saturday";
        // }
        // console.log(cur_day)
        // console.log(Date())

// part 3 8

        // console.log(jQuery.isEmptyObject({}));

        // function isEmpty(obj) {
        //         for(var prop in obj) {
        //           if(obj.hasOwnProperty(prop)) {
        //             return false;
        //           }
        //         }
        //         return JSON.stringify(obj) === JSON.stringify({});
                
        //       }

// part 3 9
 
        // var arr = [1,25,33,4,9,10,23,11];
        // var search = arr.find(a => a > 10);
        // console.log(search);
        // var filter=arr.filter(a=>a>20);
        // console.log(filter)
        // var findindex=arr.indexOf(23)
        // console.log(findindex)

// part 4 1
        // function rremoveItem(arr) {
        //         return arr.filter((item,index) => arr.indexOf(item) === index);
        //     }
        //     console.log(rremoveItem([1,2,3,4,1,3,4,7,5]));

// part 4 4
// let a=[11,-5,8,5,-01,-0.3,3]
//         let filter=a.filter(ele=>ele<0)
//         console.log("negative val",filter)
        

// part 5 1

// let arr1=[12,56,66,100,01]
// let arr2=[12,22,99];
// let arr3=[...arr1,...arr2];
// console.log(arr3)
// console.log("max val of an array",Math.max(...arr3))
// console.log("min val of an array",Math.min(...arr3))

// part 5 2

let fishermen=[
        {name:"george",score:200},
        {name:"mani",score:120},
        {name:"ravi",score:150},
        {name:"nathan",score:99}
         ];
let sum=0
let fishmen=fishermen.map(a=>a)
fishmen.forEach(a=>sum+=a.score)
console.log("total score",sum)
console.log("average",sum/fishermen.length)
let max_score=fishermen.filter(a=> a.score>100)
max_score.forEach(a=> console.log("get score above 100",a.name))