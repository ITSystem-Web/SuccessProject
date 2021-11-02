const comentarii = document.querySelectorAll(".recenzii-content");
const sliderLine =document.querySelector(".slider-line");

let count=0;
let width;

function init(){
   console.log("resize");

   width = document.querySelector(".sliderr").offsetWidth;
   sliderLine.style.width=width*comentarii.length+"px";
   comentarii.forEach(item=>{
      item.style.width=width+"px";
      item.style.height="auto";
   })
   rollSlider();
}

window.addEventListener("resize",init);
init();


document.querySelector(".prevbtn").addEventListener("click", function () {
   count--

   if (count <0 ) {
      count = comentarii.length-1;
   }
   rollSlider();
});

document.querySelector(".nextbtn").addEventListener("click",function(){
   count++

   if(count >= comentarii.length ) {
      count=0
   }
   rollSlider();
});

function rollSlider(){

   sliderLine.style.transform= 'translate(-' +count*width+ 'px)';
}