// mảng tài khoản

var account = [];
if (localStorage.getItem("arr-account") != null) {
    account = JSON.parse(localStorage.getItem("arr-account"));
}
else if(localStorage.getItem("arr-account" ) === null) {
    account =
    [
        {
            id:"1",
            username:"admin",
            password:"123456",
            authority:"admin",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false, // true là khóa, false là không khóa
        },
        {
            id:"2",
            username:"admin2",
            password:"123456",
            authority:"admin",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
        ,
        {
            id:"3",
            username:"user",
            password:"123456",
            authority:"user",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
        ,
        {
            id:"4",
            username:"user2",
            password:"123456",
            authority:"user",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
      ];
    localStorage.setItem("arr-account", JSON.stringify(account));
}

