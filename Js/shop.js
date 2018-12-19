 
let reguestHandler= new XMLHttpRequest();
reguestHandler.open("get","json/shop.json",false);
reguestHandler.send();
let data=JSON.parse(reguestHandler.responseText);
console.log(data)

for(let i=0; i<data.length; i++){
  $("#shop").append(
    ' <div class="card position-relative" style="width: 21rem; float:left; margin-left:30px;">\
           <img class="card-img-top" src="'+data[i].image+'" alt="Card image cap">\
           <span style=" font-size:40px; font-weight:bold; top:50px; left:15px;">'+data[i].productName+'</span>\
           <span class="position-absolute" style="top:30px; left:15px;font-size:16px; font-weight:400;">'+data[i].Time+'</span>\
        </div>')
}

// $("#shop .card").mouseover(function(){
//   $(".card").css("background-color","blue")
// })

let reguest= new XMLHttpRequest();
reguest.open("get","json/product.json",false);
reguest.send();
let product=JSON.parse(reguest.responseText);

for(let j=0; j<product.length; j++){
  $("#product").append('<div class="cards" style="height:400px; width:17rem; display:inline-block; margin-left:10px; margin:0px;">\
                          <div class="card position-relative" style="width: 16rem; float:left; margin-left:10px;">\
                             <img class="card-img-top" src="'+product[j].image+'" alt="Card image cap">\
                          </div>\
                          <div class="row" style="width:16rem; height:50px; margin-left:10px">\
                             <div class="col1" style="width:200px; height:48px;">\
                             <div class="col11" style="width:198px; height:23px;">\
                             <p style="color:gray">'+product[j].productName+'</p>\
                             </div>\
                             <div class="col12" style="width:198px; height:23px;">\
                              <span style="color:dark-gray">'+product[j].productPrice+'</span>\
                             </div>\
                             </div>\
                          </div>\
                        </div>')
}
// $(".card").mouseover(function(){
//   $("img").css("");
// })


// $.ajax({
//   url:"json/productS.json",
//   success:function(){

//     let products=productName;
//     console.log(products);
//   }
// })









// $.ajax({
//   url:"json/productS.json",
//   success:function(data){
    
//     let womanCategory=data['Woman'];
//     console.log(womanCategory)
//     let template="";
//     $(womanCategory).each(function(index,product){
//       template+=`
//         <div class="col-md-3" >

//           <div class="card">
//             <img class="card-img-top" src="${product.ProductImages[0]}" alt="Card image cap">
//             <div class="card-body">
//               <h5 class="card-title">${product.ProductName}</h5>
//               <p class="card-text">${product.ProductPrice}</p>
//               <a href="#" class="btn btn-primary my-2" data=${product.ProductId} onclick="FindProduct(this)">Add To Cart</a>
//               <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//   Show Modal
// </button>
//             </div>
//           </div>

//         </div>
//       `
        

//     })
//     $("#shop .container .row").append(template)
     
        
      
      

     
//     },
//   fail:function(){
//     console.log("error")
//   }
// })


// function FindProduct(element){
//     let id=$(element).attr("data")
//     $("#modal").html("");
    
//     $.ajax({
//       url:"data/products.json",
//       success:function(data){
//          let womanCategory=data['Woman'];
//          $(womanCategory).each(function(index,product){
//             if(product.ProductId==id){
//               let images=product.ProductImages
//                let modal=`
//                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                   <div class="modal-dialog" role="document">
//                     <div class="modal-content">
//                       <div class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLabel">${product.ProductName}</h5>
//                         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                           <span aria-hidden="true">&times;</span>
//                         </button>
//                       </div>
//                       <div class="modal-body">
//                         ${product.ProductPrice}
//                       </div>
                    
//                     </div>
//                   </div>
//                 </div>

//                `
//                $("#modal").append(modal)
//                if(window.localStorage.getItem("selectedItems")===null){
//                 window.localStorage.setItem("selectedItems",JSON.stringify([]))
//                }
//                let arr=JSON.parse(window.localStorage.getItem("selectedItems"))
//                arr.push(product);
//                window.localStorage.setItem("selectedItems",JSON.stringify(arr))
//                alert(arr.length)
               

//             }
//          })
//       }
//     })
// }






















// // $.ajax({
// //   url:"json/data.json",
// //   success:function(data){
// //     $(data.Woman).each(function(index, el) {
// //        let dataRow=
// //       `<div class="col-md-3">
// //           <div class="item"  data="${el.ProductId}" data-toggle="modal" data-target="#productDetails"> 
// //           <img src="${el.ProductImages[0]}" class="img-fluid">
// //           <h6 class="text-secondary my-2">${el.ProductName}</h6>
// //           <h6 class="text-body my-2">${el.ProductPrice}</h6>
// //           </div>
// //        </div>`
// //     $("#products .row").append(dataRow)
  
// //     });
// //     $(".item").click(function(event) {
// //       let dataRow=""


      
// //       $("#productDetailsBody").html("")
// //       let _id=$(this).attr("data");
// //        $(data.Woman).each(function(index, el) {
// //          if(el.ProductId==_id){
           
// //            $(el.ProductImages).each(function(index, img) {
// //              dataRow+=`<img src="${img}" class="img-fluid col-md-4 my-2">`
// //            });
          
// //           $("#productDetailsTitle").html(el.ProductName)
// //           $("#productDetailsBody").append(dataRow)

// //          }
// //        });
// //     });

// //   },
// //   fail:function(){
// //     console.log("error")
// //   }
// // })
