const cardProduct = document.querySelector(".card-products-container");

  // check xem đã đăng nhập chưa   
let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items


// mặc định khi khởi động web sẽ load trang 1 keyboard
filterProduct("keyboard");


function checkSignin()
{
  if(isSignedin == false)
  {
    alert("Bạn chưa đăng nhập!");
    fdn();
    displaySignMenu("Sign in");
    hideInfoProduct();
    return isSignedin;
  }
  return isSignedin;

}

function filterProduct(typeProduct) {
  item = "";
  tmpProduct = [];
  switch (typeProduct) {
    case "keyboard": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem 1 có phải là trang cuối không
      createPageNum(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandle();
      break;
    }
    case "headphone": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem 1 có phải là trang cuối không
      createPageNum(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandle();
      break;
    }
    case "mouse": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "speaker": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "Laptop": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
  }
}

function createPageNum(tmpProduct) {
  let quantity;
  quantity = tmpProduct.length / 8;
  
  if (quantity % 1 != 0) {
    quantity++;
  }

  quantity = Math.floor(quantity);
  let pageNum = `<div class="menu-card-products-page-number">`;
  let count = 0;

  lastPageIs = 0;

  do {
    count++;
    if (count === quantity) {
        lastPageIs = count;
        pageNum += `
        <div class="pageNumber" onclick="pageRender(${count},true)">${count}</div>
        `;
      }
    else {
        pageNum += `
        <div class="pageNumber" onclick="pageRender(${count},false)">${count}</div>
        `;
      }
    }
  while (count < quantity);

  pageNum += `</div>`;

  activePageNumber(1);
  return pageNum;
}

function pageOneHandle() {
  if (lastPageIs == 1) {
    pageRender(1, true);
  } else {
    pageRender(1, false);
  }
}

function pageRender(pageNumberClicked, lastPage) {
  // console.log(tmpProduct);
  // console.log("da click trang: "+pageNumberClicked);
  item = "";
  let positionLoad = (pageNumberClicked - 1) * 8;
  
  // vị trí sản phẩm load không âm 
  if (positionLoad < 0) {
    positionLoad = 0;
  }
  // kiểm tra nếu là trang cuối thì duyệt tới hết mảng 
  if (lastPage == true) {
    // console.log("đã tới trang cuối !");
    for (let k = positionLoad; k < tmpProduct.length; k++) {
      renderProduct(tmpProduct[k]);
    }
    
    item += createPageNum(tmpProduct); // thêm vào lại 3 cục div pageNumber
    cardProduct.innerHTML = item;
  }
  
  // nếu không thì duyệt đến 8 vị trí cách từ positionLoad 
  else {
    for (let k = positionLoad; k < positionLoad + 8; k++) {
      renderProduct(tmpProduct[k]);
    }
    item += createPageNum(tmpProduct);
    cardProduct.innerHTML = item;
  }
  activePageNumber(pageNumberClicked);
  
}

function activePageNumber(pageNumberClicked)
{
  const pageNumBers = document.querySelectorAll(".pageNumber");

  pageNumBers.forEach((pageNumber,index) => {
      if((index+1) != pageNumberClicked){
        pageNumber.classList.remove("activePageNumber");
      }
      else{
        pageNumber.classList.add("activePageNumber");
      }
  }); 
}

function renderProduct(product) {
  item += `
      <div class="card-product-item" id="${product.id}" onclick="productInfomation(${product.id})">
        <img
          class="card-img"
          src="./${product.img}"
        />
        <div class="card-product-content">
          <div class="card-product-content-top">
            <div class="card-product-content-title card-title">
              ${product.name}
            </div>
            <div class="label-card-title card-title">${product.description}</div>
          </div>
          <div class="card-product-content-bottom">


          <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event);addProductToCartByCardProduct(${product.id});">

            <i class="fa-solid fa-cart-shopping icon-btn-shop"></i>
            Thêm giỏ hàng
          </div>

            <div class="card-product-content-bottom-buying">
              <div class="card-product-content-bottom-buying-price">
                <span class="card-product-priceNumber">${formatPrice(product.price)}</span> 
                <span class="card-product-priceIcon">₫</span>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
      `;
}


/* THAO TÁC CHỈNH SỬA TÀI KHOẢN TỪ PHÍA NGƯỜI DÙNG */


const editAccountTable = document.querySelector(".edit-account-container");
const accountName = document.querySelector("#accountName");
const accountPassword = document.querySelector("#accountPassword");
const accountTel = document.querySelector("#accountTel");
const accountMail = document.querySelector("#accountMail");
const idAccount = document.querySelector("#accountId");

function openEditAccountTable(accountId)
{
  let accountNeedEdit;
  for(let acc of account)
  {
    if(acc.id == accountId)
    {
      accountNeedEdit = acc;
      break;
    }
  }
  console.log(accountNeedEdit);
  accountName.value = accountNeedEdit.username;
  accountPassword.value = accountNeedEdit.password;
  accountMail.value = accountNeedEdit.email;
  accountTel.value = accountNeedEdit.phone;
  idAccount.value = accountNeedEdit.id;

  editAccountTable.style.display = "flex";
}

function editAccountToAccountArray(event)
{
  event.preventDefault();
  // check dữ liệu
  if(ValidateEmail(accountMail.value) == true && validatePhone(accountTel.value) == true)
  // check dữ liệu
  {
    for(let acc of account)
    {
      if(acc.id == idAccount.value)
      {
        acc.username = accountName.value;
        acc.password = accountPassword.value;
        acc.email = accountMail.value;
        acc.phone = accountTel.value;
        break;
      }
    }
    
    
    localStorage.removeItem("arr-account");
    localStorage.setItem("arr-account",JSON.stringify(account));
    alert("Cập nhật tài khoản thành công!");
    window.location.reload();
  }
  else
  {
    alert("Email hoặc số điện thoại không hợp lệ!")
  }
  
}

// check định dạng mail
function ValidateEmail(mail) 
{
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com/;

  if (mail.match(validRegex)) {
    return true;
  }
  return false;

}
// check định dạng sdt
function validatePhone(phoneNumber)
{
  let validRegex = /^0+[9,8]+[0-9]{8}/
  if(phoneNumber.match(validRegex)){
    return true;
  } return false;
}
function closeEditAccountTable(event)
{
  console.log("đóng bảng chỉnh sửa tài khoản!");
  editAccountTable.style.display = "none";
}


/* THAO TÁC CHỈNH SỬA TÀI KHOẢN TỪ PHÍA NGƯỜI DÙNG */



// hold active menu-items
let menu = document.querySelector("#menu");
let menuCloseIcon = document.querySelector('.close-menu-products-icon');
let menuItems = document.querySelectorAll(".menu-items");
let menuItemsImg = document.querySelectorAll(".menu-items-img");
let menuItemsOverlay = document.querySelectorAll(".overlay");

menuItems.forEach((menuItem, index) => {
  let menuItemImg = menuItemsImg[index];
  let menuItemOverlay = menuItemsOverlay[index];

  menuItem.onclick = function () {
    document
      .querySelector(".menu-items.activeMenuItems")
      .classList.remove("activeMenuItems");
    document
      .querySelector(".overlay.activeMenuItemOverlay")
      .classList.remove("activeMenuItemOverlay");
    document
      .querySelector(".menu-items-img.activeMenuItemImg")
      .classList.remove("activeMenuItemImg");

    this.classList.add("activeMenuItems");
    menuItemOverlay.classList.add("activeMenuItemOverlay");
    menuItemImg.classList.add("activeMenuItemImg");
  };
});

