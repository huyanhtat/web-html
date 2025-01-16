const search_inp = document.querySelector("#search_text");
const search_btn = document.querySelector("#search_button");
//console.log(search_inp);

function searchEngine(event)
{
  console.log(search_inp.value);
  tmpProduct = [];

  for(let i=0; i<product.length; i++)
  {
    if(product[i].name.toLowerCase().match(search_inp.value.toLowerCase()) != null)
    {
      tmpProduct.push(product[i]);
    }
  }
  event.preventDefault();
  createPageNum(tmpProduct);
  pageOneHandle();
}



function getEnterKey(event) {
  if(event.keyCode == 13)
  searchEngine(event);
}
search_inp.addEventListener('keypress',getEnterKey)

// // sap xep giam dan
$(".down").click(function(){
  var tmp;
  for(let i=0; i<tmpProduct.length-1;i++){
    for(let j=i+1;j<tmpProduct.length;j++){
      if(parseFloat(tmpProduct[i].price,10)<parseFloat(tmpProduct[j].price,10)){
        tmp=tmpProduct[i];
        tmpProduct[i]=tmpProduct[j];
        tmpProduct[j]=tmp;
      }
    }
  }
  createPageNum(tmpProduct);
  pageOneHandle();
})
// sap xep tang dan
$(".up").click(function(){
  var tmp;
  for(let i=0; i<tmpProduct.length-1;i++){
    for(let j=i+1;j<tmpProduct.length;j++){
      if(parseFloat(tmpProduct[i].price,10)>parseFloat(tmpProduct[j].price,10)){
        tmp=tmpProduct[i];
        tmpProduct[i]=tmpProduct[j];
        tmpProduct[j]=tmp;
      }
    }
  }
  createPageNum(tmpProduct);
  pageOneHandle();
})
var menuToggle = document.querySelector(".menuToggle");
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
}

// search theo giá

function searchPrice(event)
{
  event.preventDefault();
  const priceStart = document.querySelector("#price-start-input").value;
  const priceEnd = document.querySelector("#price-end-input").value;
  let productFilterPrice=[];
  item ="";
  /*  reset tmpProduct sau mỗi lần lọc */

  // dọn trống tmpProduct của những lần lọc trước
  tmpProduct = [];
  // nạp lại tmpProduct theo loại sản phẩm đang kích hoạt 
  let menu = document.querySelectorAll(".menu-items");
  menu.forEach((type,index) =>{
    if(type.classList.contains("activeMenuItems"))
    {
      switch (index) {
        case 0: {
          for (let i = 0; i < product.length; i++) {
            if (product[i].type == "keyboard") {
              tmpProduct.push(product[i]);
            }
          }
          break;
        }
        case 1: {
          for (let i = 0; i < product.length; i++) {
            if (product[i].type == "headphone") {
              tmpProduct.push(product[i]);
            }
          }
          break;
        }
        case 2: {
          for (let i = 0; i < product.length; i++) {
            if (product[i].type == "mouse") {
              tmpProduct.push(product[i]);
            }
          }
          break;
        }
        case 3: {
          for (let i = 0; i < product.length; i++) {
            if (product[i].type == "speaker") {
              tmpProduct.push(product[i]);
            }
          }
          break;
        }
        case 4: {
          for (let i = 0; i < product.length; i++) {
            if (product[i].type == "Laptop") {
              tmpProduct.push(product[i]);
            }
          }
          break;
        }
      }
    }
  });

  //copy tmpProduct

  for(let productTmp of tmpProduct)
  {
    productFilterPrice.push(productTmp);
  }
  // dọn trống tmpProduct để đưa những sản phẩm đã lọc vào
  tmpProduct = [];
  for(let productTmp of productFilterPrice)
  {
    if(parseInt(productTmp.price) >= priceStart && parseInt(productTmp.price) <= priceEnd)
      tmpProduct.push(productTmp);  
  }
  // không tìm thấy sản phẩm nào
  if(tmpProduct.length <= 0)
  {
    alert("Không tìm thấy sản phẩm nào !");
  }
  else
  {
    //log ra 
    createPageNum(tmpProduct);
    pageOneHandle();
  }
 
  
}
