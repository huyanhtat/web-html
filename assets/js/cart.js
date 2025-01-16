function formatPrice(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

// nhấn tổ hợp phím ctrl + X để mở cart
var opened = false;
$(document).keydown(function(evt) {
  evt = evt || window.event;
  if (evt.ctrlKey && evt.keyCode == 88) {
    if(opened) {
      hideCart();
      opened = false;
    }  else {
      showCart()
      opened = true;
    }
  }
});

// chặn keypress của user
function preventKeyPress(e) {
  e.preventDefault(); 
  return false;
}


let cart = document.getElementById("cart");
let shoppingIcon = document.querySelector(".shopping-icon");
let cartContainerMiddle = document.querySelector(".cart-container-middle");
let cartTotalAmountNumber = document.getElementById(
  "cart-container-bottom-total-amount-number"
);// tổng tiền dưới dạng string
let totalTmp = 0;// tổng tiền dạng số
let cartContainItem = '';
let btnRemoveProductInCarts;
let btnBuyCart = document.querySelector(".cart-container-bottom-buy");

// show cart
function showCart() {
  cart.classList.add("open");
  hideViewOrder(); 
  hideInfoProduct();
  backgroundLogin.style.display="none";
}
// hide cart
function hideCart() {
  cart.classList.remove("open");
}
cart.addEventListener("click", hideCart);

function stopPropagate(e) {
  e.stopPropagation();
}
// tính tổng tiền khi thêm và xóa sản phẩm
function updateAddTotal(quantity, price) {
  totalTmp += quantity * price;
}

function updateSubtractTotal(quantity, price) {
  totalTmp -= quantity * price;
}

function updateTotal() {
  cartTotalAmountNumber.value = totalTmp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

//kiểm tra xem trong giỏ đã sản phẩm cùng id chưa
function existInCart(tmpId) {
  let arrCart = JSON.parse(localStorage.getItem('cart'));
  if(arrCart == null || arrCart.length == 0 ) return false;
  for (let i = 0; i < arrCart.length; i++) {
    if(parseInt(arrCart[i].id) == tmpId) {
      return true;
    }
  }
  return false;
}
// nút thêm sản phẩm vào giỏ hàng
function addProductToCartByInforProduct(id) {
  if (!checkSignin()) return;  
  alert("Bạn đã thêm sản phẩm vào giỏ hàng"); 
  // chạy for để thêm đúng sản phẩm vào giỏ hàng
  if(localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
    let arrCart = [];
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == id) {
            let tmpCartArr = product[i];
            tmpCartArr.quantity = parseInt(quantityProduct.value);
            arrCart.push(tmpCartArr);
            break;
          }
    }
    localStorage.setItem('cart',JSON.stringify(arrCart));
  } else {
    let arrCart = JSON.parse(localStorage.getItem('cart'));
    // chạy for để thêm đúng sản phẩm vào giỏ hàng
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == id && existInCart(id) == true) {
        for (let j = 0; j < arrCart.length; j++) {
          if(parseInt(arrCart[j].id) == id)
            arrCart[j].quantity = parseInt(arrCart[j].quantity) + parseInt(quantityProduct.value);
        }
      } else if(product[i].id == id && existInCart(id) == false) {
        let tmpCartArr = product[i];
        tmpCartArr.quantity = parseInt(quantityProduct.value);
        arrCart.push(tmpCartArr);
      }
    }
      localStorage.setItem('cart',JSON.stringify(arrCart));
  }
  showProductsInCart();
  hideInfoProduct();
}


function addProductToCartByCardProduct(id) {
  if (!checkSignin()) return;
  alert("Bạn đã thêm sản phẩm vào giỏ hàng");

  if(localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
    let arrCart = [];
    for (let i = 0; i < product.length; i++) {
      if (product[i].id == id) {
            let tmpCartArr = product[i];
            tmpCartArr.quantity = 1;
            arrCart.push(tmpCartArr);
            break;
          }
    }
    localStorage.setItem('cart',JSON.stringify(arrCart));
  } else {
    let arrCart = JSON.parse(localStorage.getItem('cart'));
    // chạy for để thêm đúng sản phẩm vào giỏ hàng
    for (let i = 0; i < product.length; i++) {
      // kiểm tra nếu true thì tăng số lượng trong giỏ của cùng sản phẩm 
      if (product[i].id == id && existInCart(id) == true) {
        for (let j = 0; j < arrCart.length; j++) {
          if(parseInt(arrCart[j].id) == id)
            arrCart[j].quantity = parseInt(arrCart[j].quantity) + 1;
        }
      // còn nếu false thì thêm sản phẩm mới vào giỏ hàng
      } else if(product[i].id == id && existInCart(id) == false) {
        let tmpCartArr = product[i];
        tmpCartArr.quantity = 1;
        arrCart.push(tmpCartArr);
      }
    }
    localStorage.setItem('cart',JSON.stringify(arrCart));
  } 
  showProductsInCart();
}

function removeCartItem(productId) {
  let cartArr = JSON.parse(localStorage.getItem('cart')); 
 
  btnRemoveProductInCarts = document.getElementsByClassName(
    "cart-container-middle-product-remove"
  );
  for (let i = 0; i < cartArr.length; i++) {
    if(parseInt(cartArr[i].id) == productId) { 
      cartArr.splice(i,1);
      break;
    }
  }
  localStorage.setItem('cart',JSON.stringify(cartArr));
  showProductsInCart();
}
// nút mua tất cả sản phẩm trong giỏ hàng
function buyProductInCart() {
  if (!checkSignin()) return;
  
  if(JSON.parse(localStorage.getItem('currentUser')).status == true) {
    alert("Tài khoản của bạn đã bị khóa!!");
    return;
  }  
  
  if( totalTmp == 0 || cartContainerMiddle.children.length == 0) {
    alert("Bạn chưa thêm sản phẩm vào giỏ hàng");
    return;
  }
  // sau khi nhấn mua hàng các biến trở về trạng thái ban đầu
  if(confirm("Bạn có xác nhận muốn mua hàng!") == false) return;
  pushProductToOrderForm(getDate(),totalTmp);
  cartContainerMiddle.innerHTML = '';
  cartTotalAmountNumber.value = '0';
  totalTmp = 0;
  let arrCart = [];
  localStorage.setItem('cart',JSON.stringify(arrCart));
  alert("Bạn đã mua hàng thành công");
  showProductsInCart();
  hideCart();
}


showProductsInCart();
function showProductsInCart() {
  cartContainerMiddle.innerHTML = '';
  totalTmp = 0;
  if(localStorage.getItem('cart') === null || localStorage.getItem('cart') == '[]') {
    let divEmpty = document.createElement('div');
    divEmpty.classList.add('notifyEmptyCart');
    divEmpty.innerText = 'Bạn chưa thêm sản phẩm vào giỏ hàng'; 
    document.querySelector('.cart-container-middle').appendChild(divEmpty);
  } else {
    
    cartContainItem = '';
    arrCart = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < arrCart.length; i++) {
      cartContainItem = `
      <div class="cart-container-middle-product">
        <div class="cart-container-middle-product-img">
         <img src="./${arrCart[i].img}" alt="">
        </div>
        <div class="cart-container-middle-product-name">
          <div class="cart-container-middle-product-name-title">
            ${arrCart[i].name}
          </div>
          <div class="cart-container-middle-product-name-label">
            ${arrCart[i].description}
          </div>
        </div>
        <div class="cart-container-middle-product-quantity">
          <input type="number" value="${arrCart[i].quantity}" class="cart-container-middle-product-quantity-adjust" min="1" onkeypress="preventKeyPress(event)" onchange="updateEventchangeTotal(this.value,${arrCart[i].id})" >
        </div>
        <div class="cart-container-middle-product-price">
          <span class="cart-container-middle-product-priceNumber">${formatPrice(arrCart[i].price)}</span> 
          <span class="cart-container-middle-product-priceIcon">₫</span>
        </div>
        <div class="cart-container-middle-product-remove" onclick="removeCartItem(${arrCart[i].id})">
          <i class="fa-solid fa-xmark cart-remove-icon"></i>
        </div>
      </div>
      `;
      // đưa sản phẩm mới thêm lên đầu trong giỏ hàng 
      totalTmp += parseInt(arrCart[i].quantity) * parseInt(arrCart[i].price);
      cartContainerMiddle.innerHTML = cartContainItem + cartContainerMiddle.innerHTML; //+ cartContainerMiddle.innerHTML;
    }
  }
  updateTotal();
}


function updateEventchangeTotal(inputValue,productCartId) {
  let arrCart = JSON.parse(localStorage.getItem('cart'));
  for (let i = 0; i < arrCart.length; i++) {
    if(parseInt(arrCart[i].id) == productCartId) {
      totalTmp -= parseInt(arrCart[i].quantity) * parseInt(arrCart[i].price);
      arrCart[i].quantity = inputValue;
      totalTmp += parseInt(inputValue) * parseInt(arrCart[i].price);
      updateTotal();
      break;
    }
  }
  localStorage.setItem('cart',JSON.stringify(arrCart));
  showProductsInCart();
}