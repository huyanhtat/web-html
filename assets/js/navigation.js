// scoll header menu bar
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
}); 
// ham display ra menu dang nhap
// var loginMenu = document.getElementById("login");
// var createMenu = document.getElementById("create");
var backgroundLogin = document.getElementById("sigin-background");


function showMenuList() {
    menu.classList.add("showMenu");
}
function hideMenuList() {
    menu.classList.remove("showMenu");
}

// loginMenu.addEventListener("click", function (event) {
//     stopPropagate(event);
// })

// createMenu.addEventListener("click", function (event) {
//     stopPropagate(event);
// })

// backgroundLogin.addEventListener("click", function () {
//     backgroundLogin.style.display = "none";
// })

function displaySignMenu(input) {

  if (input == "Sign in" || input == "Sign up") {
    backgroundLogin.style.display = "flex";
    hideInfoProduct();
  }
  else {
    backgroundLogin.style.display = "none";
  }

}

function fdk() {
  if (isSignedin == false) {
    $("#sigin-background").html(`
    <div class="signin" id="create">
        <a class="signin-icon" onclick="displaySignMenu('none')">X</a>
        <h2 class="signin-heading" >Tạo tài khoản</h2>
        <p class="signin-already" id="signin-already">
          Bạn đã có tài khoản ? 
          <a href="#" class="signin-link-underline" onclick="fdn()">Đăng nhập ngay </a>
        </p>
        <form onsubmit="createAcc(event)">
          <div class="form-user-name">
              <input type="text" class="form-input" placeholder="Name" id="form-Name">
          </div>
          <div class="check-error" id="error-username""> </div>
          <div class="form-password">
              <input type="password" class="form-input" placeholder="Password" id="form-Password">
          </div>
          <div id="error-pass" class="check-error"> </div>
          <div class="form-phone">
            <input type="text" class="form-input" placeholder="Phone" id="form-Phone">
          </div>
          <div id="error-phone"  class="check-error" > </div>
          <div class="form-email">
              <input type="text" class="form-input" placeholder="E-mail" id="form-Email">
          </div>
          <div id="error-email"  class="check-error"> </div>
          <div >
              <button type="submit" class="form-submit">
                  <span class="form-submit-text" >Đăng kí</span>             
                  <i class="fa fa-long-arrow-right form-submit-icon"></i>      
                </button>
          </div>
        </form>
      </div>
        `);

  }
}

function fdn() {
  if (isSignedin == false) {
    $("#sigin-background").html(`
    <div class="signin" id="login">
      <a class="signin-icon" onclick="displaySignMenu('none')">
        <i class="fa-solid fa-xmark"></i></a>
      <h2 class="signin-heading">Đăng nhập</h2>
      <p class="signin-already" id="signin-already">
        Bạn chưa có tài khoản?
        <a href="#" class="signin-link-underline" onclick="fdk()">Hãy tạo ngay</a>
      </p>
      <form onsubmit="dangnhap(event)" >
        <div class="form-user-name">
          <input type="text" class="form-input" placeholder="Name" id="name" />
        </div>
        <div class="form-password">
          <input type="password" class="form-input" placeholder="Password" id="pass" />
        </div>
        <div>
          <button type="submit" class="form-submit">
            <span class="form-submit-text">Đăng nhập</span>
            <i class="fa fa-long-arrow-right form-submit-icon"></i>
          </button>
        </div>
      </form>
    </div>
        `);
  }
}
$(".dropdown-item:contains('Đăng kí')").click(fdk);
$(".dropdown-item:contains('Đăng nhập')").click(fdn);
