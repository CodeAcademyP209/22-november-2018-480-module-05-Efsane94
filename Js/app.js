let navLink=$(".navbar-nav li a");
let sections=$("section");
navLink.click(function(){
	for(let i=0;i<sections.length;i++){
		if(($(sections[i]).attr("name"))==$(this).html()){
			let section=$(sections[i]);
			console.log(section.offset().top)
			$("html, body").animate({ scrollTop : section.offset().top}, 600);
		}
	}
})



  let navs=$("#home a");
    for(let j=0; j<navs.length; j++){
  	$(navs[j]).mouseover(function(){
  		$(this).css("color","#00d8ff");
  	})
  	$(navs[j]).mouseout(function(){
  		$(this).css( "color","white");	
  	})
  }


  let a=$("#tours a");
  for(let i=0; i<a.length; i++){
  	$(a[i]).mouseover(function(){
  		$(this).css({"color":"black", "background":"white"});
  	})
  	$(a[i]).mouseout(function(){
  		$(this).css({"background": " #00d8ff", "color":"white"});	
  	})
  }

  let images=$("#destination img");
  let country=$("#destination a");
  for(let k=0;k<images.length; k++){
  	  $(images[k]).mouseover(function(){
      $(country[k]).css("color","#00d8ff");
  })
  	  $(images[k]).mouseout(function(){
  	  	$(country[k]).css("color","white");
  	  })
  }
 

// let images=$("#destination img");
// console.log(images);
  // let inner=$(" #tours #col1");
  // $(a[0]).click(function(){
  // 	$(this).css("background","white");
  // 	 $(this)=inner.html();
  // })

// let bttn=$("#tours .row3 button");
// $(bttn).mouseover(function(){
// 	$(this).css(boxshadow: "0 5px 20px rgba(14,15,18,.2)",
// 	 })

















// $(window).scroll(function(){
// 	console.log(Math.floor($(window).scrollTop()))
// 	if($(window).scrollTop()>50){
// 		$("nav").css({
// 			background:"black",
// 			top:$(window).scrollTop()+"px"
// 		})
// 	}
// })

// window.onscroll = function() {myFunction()};

// var header = $("#container-fluid");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//    $(header).css("background", "black")
//     // header.classList.add("sticky");

//   } else {
    
//   }
// }

// // let slideScroll=$(".slide").offset();

// console.log(slideScroll.left)

// let slideAmount=$(".card").width();

// let theSlide=286;
// console.log(slideAmount)


// $(".previous").click(function(){

// 	theSlide-=slideAmount
// 	$(".slide").offset({left:theSlide})
// 	console.log(theSlide)
// })



// $(".next").click(function(){

// 	theSlide+=slideAmount
// 	$(".slide").offset({left:theSlide})
// 	console.log(theSlide)
// })
 
 
