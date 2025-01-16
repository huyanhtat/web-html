let isAdmin;
let isSignedin = false;

$(document).ready(function () {

    if (location.href == '/admin.html') {
        document.querySelector("span.dropdown-select").innerHTML = "Admin";
    }
});

if (localStorage.getItem("isSignedin") != "true") {
    isSignedin = false;
}
else {
    isSignedin = true;
}

if (localStorage.getItem("adminSignedin") != null) {
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");
}

if (localStorage.getItem("userSignIn") != null) {
    let userNameTmp = JSON.parse(localStorage.getItem("currentUser"));
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("userSignIn");
    var dropdown_list = document.querySelector(".dropdown .dropdown-list");
    dropdown_list.innerHTML = `
            <li class="dropdown-item" onclick="openEditAccountTable(${userNameTmp.id})">
                <span class="dropdown-text">Thông tin cá nhân</span>
            </li>
            <li class="dropdown-item" onclick="showViewOrder()">
                <span class="dropdown-text">Xem đơn hàng đã đặt</span>
            </li>
            <li class="dropdown-item">
                <span class="dropdown-text">Đăng xuất</span>
            </li>
                `;
    localStorage.setItem("isSignedin", "true");
    $(".dropdown-item:contains('Đăng xuất')").click(function () {
        if (isSignedin == true) {
            isSignedin = false;
            dropdown_list.innerHTML = `
                <li class="dropdown-item" onclick="displaySignMenu('Sign in')" >
                    <span class="dropdown-text" id="sign-in">Đăng nhập</span>
                </li>
                <li class="dropdown-item" onclick="displaySignMenu('Sign up')" >
                    <span class="dropdown-text" id="sign-up">Đăng kí</span>
                </li>
          `;
        }
        localStorage.setItem("cart",JSON.stringify([]));
        document.querySelector("span.dropdown-select").innerHTML = "Tài khoản";
        localStorage.removeItem("userSignIn");
        localStorage.setItem("currentUser",JSON.stringify({}));
        localStorage.setItem("isSignedin", isSignedin);
        window.location.reload();
    });
}

function dangXuatAdmin() {
    localStorage.setItem("isSignedin", JSON.stringify("false"));
    localStorage.removeItem("adminSignedin");
    localStorage.removeItem("textSpan");
    window.location.href = "index.html";
}

function dangnhap(event) {
    try {
        var username = document.getElementById("name").value;
        var password = document.getElementById("pass").value;

        var arr = JSON.parse(localStorage.getItem("arr-account"));
        var found = false;
        arr.forEach(element => {
            if (username == element.username && password == element.password && element.authority == "admin") {
                found = true;
                localStorage.setItem("adminSignedin", username);
                localStorage.setItem("isSignedin", "true");
                window.location.href = "admin.html";
                event.preventDefault(); // ngăn form không bị reload sau khi submit
            }
            else if (username == element.username && password == element.password && element.authority == "user") {
                localStorage.setItem("isSignedin", "true");
                localStorage.setItem("userSignIn", username);
                localStorage.setItem("currentUser",JSON.stringify(element));
                found = true;
            }
        });
        if (found === false) {
            alert("Sai tài khoản hoặc mật khẩu!!");
        }

        backgroundLogin.style.display = "none";
    } catch (err) {
        alert(err);
    }

}

function createAcc(event) {
    try {
        var authority = "user";
        var username = document.getElementById("form-Name").value;
        var password = document.getElementById("form-Password").value;
        var phone = document.getElementById("form-Phone").value;
        var email = document.getElementById("form-Email").value;
        var arr = JSON.parse(localStorage.getItem("arr-account"));
        var found = false;
        var error_username="";
        var error_pass="";
        var error_phone="";
        var error_email="";
        if (username == "" || username.match("\\s+")){
            found = true;
            username.className="error_username";
            error_username +="Tên đăng nhập không được bỏ trống !";
        }
        if (password.length<6){
            found = true;
            username.className="error_pass";
            error_pass +="Mật khẩu phải có ít nhất 6 kí tự !";
            
        }
        else if(password == "" || password.match("\\s+")) {
            found = true;
            username.className="error_pass";
            error_pass +="Mật khẩu không được bỏ trống !";
            
        }
        if ( phone == "" || phone.match("\\s+")  ){
            found = true;
            username.className="error_phone";
            error_phone +="Số điện thoại không được bỏ trống !";
            
        }
        else if(phone.length !=10 ) {
            found = true;
            username.className="error_phone";
            error_phone +="Số điện thoại phải có 10 chữ số !";
        }
        else if(is_PhoneNumber(phone)!=true) {
            found = true;
            username.className="error_phone";
            error_phone +="Số điện thoại không đúng định dạng !";
        }
        if ( email == "" || email.match("\\s+")){
            found = true;
            username.className="error_email";
            error_email +="Email không được bỏ trống !";
        }
        else if( ValidateEmail(email)==false) {
            found = true;
            username.className="error_email";
            error_email +="Email không đúng định dạng !";
        }

        if(error_username!=""){
            document.getElementById('error-username').innerText=error_username;
             
        }
        else{
            document.getElementById('error-username').innerText="";
        }
        if(error_pass!=""){
            document.getElementById('error-pass').innerText=error_pass;
             
        }
        else{
            document.getElementById('error-pass').innerText="";
        }
        if(error_phone!=""){
            document.getElementById('error-phone').innerText=error_phone;
             
        }
        else{
            document.getElementById('error-phone').innerText="";
        }
        if(error_email!=""){
            document.getElementById('error-email').innerText=error_email;
             
        }
        else{
            document.getElementById('error-email').innerText="";
        }

        arr.forEach(element => {
            if (element.username === username) {
                found = true;
                username.className="error_username";
                error_username +="Tên đăng nhập đã tồn tại! !";
                if(error_username!=""){
                    document.getElementById('error-username').innerText=error_username;
                     
                }
                else{
                    document.getElementById('error-username').innerText="";
                }
            }
            
        });
        if (found == false) {
            var id = arr.length + 1 + "";
            var user = {
                id: id,
                username: username,
                password: password,
                phone: phone,
                email: email,
                authority: authority,
                status: false,
            }
            arr.push(user);
            localStorage.setItem("arr-account", JSON.stringify(arr));
            alert("Đăng kí thành công");
        }

    } catch (err) {
        alert(err);
    }
}
function ValidateEmail(mail) 
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) return (true)
    return (false)
}
function is_PhoneNumber(phone_number) {
  var phone_no = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if(phone_number.match(phone_no)) {
    return true;
  }  
  else {  
    return false;
  }
}


