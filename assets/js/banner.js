//Nhấn nút chuyển slide
const rightbtn1 = document.querySelector('.fa-arrow-right');
const leftbtn1 = document.querySelector('.fa-arrow-left');
const maxIndex1 = document.querySelectorAll('.banner-content img')
let index1=0;

//chuyển sang phải
rightbtn1.addEventListener("click",function(){
   index1= index1+1;
    if(index1 > maxIndex1.length-1){index1=0} 
    document.querySelector(".banner-content").style.right = index1 * 100+"%"
    
})
//chuyển sang trái
leftbtn1.addEventListener("click",function(){
    index1= index1-1;
    if(index1<0){
        index1=maxIndex1.length-1
    }
    document.querySelector(".banner-content").style.right = index1 * 100+"%"
    numberLi[index1].classList.add("color-click")
})
//tự động chuyển ảnh 5s
function autoColorClick1(){
    index1 = index1+1
    if(index1>maxIndex1.length-1) index1=0
    document.querySelector(".banner-content").style.right = index1*100+"%"
}setInterval(autoColorClick1,5000)
