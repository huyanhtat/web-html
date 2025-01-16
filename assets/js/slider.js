//Nhấn nút chuyển slide
const rightbtn = document.querySelector('.fa-right-long');
const leftbtn = document.querySelector('.fa-left-long');
const maxIndex = document.querySelectorAll('.slider-content-top img')
let index=0;
//chuyển sang phải
rightbtn.addEventListener("click",function(){
    index= index+1;
    if(index > maxIndex.length-1){index=0} 
    reomove_clickLi()
    document.querySelector(".slider-content-top").style.right = index * 100+"%"
    numberLi[index].classList.add("color-click")
    
})
//chuyển sang trái
leftbtn.addEventListener("click",function(){
    index= index-1;
    if(index<0){
        index=maxIndex.length-1
    }
    reomove_clickLi()
    document.querySelector(".slider-content-top").style.right = index * 100+"%"
    numberLi[index].classList.add("color-click")
})
//Nhấn vào nút hiện slide muốn xem
const numberLi = document.querySelectorAll(".slider-content-bottom li")
function reomove_clickLi(){
    let clickLi_active = document.querySelector(".color-click")
    clickLi_active.classList.remove("color-click")
}
numberLi.forEach(function(clickLi,index){
    clickLi.addEventListener("click",function(){
        reomove_clickLi()
        document.querySelector(".slider-content-top").style.right = index*100+"%"
        clickLi.classList.add("color-click")
        
    })
})
//hiện màu khi trỏ vào
function autoColorClick(){
    index = index+1
    if(index>maxIndex.length-1) index=0
    reomove_clickLi()
    document.querySelector(".slider-content-top").style.right = index*100+"%"
    numberLi[index].classList.add("color-click")
}setInterval(autoColorClick,5000)
