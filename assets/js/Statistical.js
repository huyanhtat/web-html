




function Statistical(input) {
    var statisticalTable; // bang thong ke
    let i = get(input); // lay ds da loc
    console.log(i);
    let total = 0;
    i.forEach(element => {
        total += parseInt(element.price) * element.quantity;
    });
    statisticalTable = {
        name: "Bảng thống kê tháng " + input,
        total: total,
        list: i
    }
    console.log(statisticalTable);
    return statisticalTable;

}
function checkSl(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].id === arr[j].id) {
                arr[i].quantity = parseInt(arr[i].quantity) + parseInt(arr[j].quantity);
                arr.splice(j, 1);
            }

        }
    }
    return arr;
}

function get(date) {
    var tmpItems = []; // danh sách các sản phẩm và số lượng từng loại tương ứng
    let items = FitlerByMonth(date);// danh sách hóa đơn sau khi lọc
    items.forEach(element => {
        let arrProduct = element.arrProductId; // danh sách sản phẩm
        let item;
        arrProduct.forEach(i => {
            item = {
                type: i.type,
                productName: i.name,
                price: i.price,
                quantity: i.quantity,
                id: i.id
            }
            tmpItems.push(item);
            checkSl(tmpItems);
        });
    });
    return tmpItems;
}
function FitlerByMonth(date) {
    let tmpOrderForm = JSON.parse(localStorage.getItem("orderForm")); // mảng hóa đơn
    let tmpArr = [];
    tmpOrderForm.forEach(element => {
        if (Find(element.dateOrder) == date && element.status) {
            tmpArr.push(element);
        }
    });
    return tmpArr;
}
function Find(str) {
    str = str.toString();
    let index = str.indexOf("/");
    let lastindex = str.lastIndexOf("/");
    return str.slice(index + 1, lastindex);
}

/* HIỂN THỊ BẢNG THỐNG KÊ  (Statistical)*/
function openStatistical() {
    let today = new Date();
    containerContentAdmin.innerHTML = `
    <div class="title">BẢNG THỐNG KÊ ${today.getFullYear()}</div>
    <form class="date-filter" onsubmit="filterStatistical(event)">
      <div class="container-nav-header-right-filter-type">
      <label for="typeProducts">Chọn loại:</label>
      <select name="typeProducts" id="typeProducts" onchange="filterStatistical(event)">
          <option value="all">Tất cả</option>
          <option value="keyboard">Bàn phím</option>
          <option value="mouse">Chuột</option>
          <option value="headphone">Tai nghe</option>
          <option value="speaker">Loa</option>
          <option value="Laptop">Laptop</option>
      </select>
      <label for="month">Lọc tháng:</label>
      <select id='gMonth'>
          <option value=''>--Select Month--</option>
          <option selected value='1'>Janaury</option>
          <option value='2'>February</option>
          <option value='3'>March</option>
          <option value='4'>April</option>
          <option value='5'>May</option>
          <option value='6'>June</option>
          <option value='7'>July</option>
          <option value='8'>August</option>
          <option value='9'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
      </select> 
      </div> 
      <button type="submit" class="filter">LỌC</button>
    </form>
    <div class="Statistical">
    
    </div>
    `
}

function filterStatistical(event) {
    event.preventDefault();

    let typeProducts = document.querySelector("#typeProducts").value;
    let month = document.getElementById("gMonth").value;
    let filterArr = [];

    let table = Statistical(month);

    if (typeProducts === "all") {
        renderStatistical(table, month);
    }
    else {
        table.list.forEach(element => {
            if (element.type === typeProducts) {
                filterArr.push(element);
            }
        });
        let table1999 = table;
        table1999.list = filterArr;

        renderStatistical(table1999, month);
    }


}

function renderStatistical(table, month) {

    const StatisticalDisplay = document.querySelector(".Statistical");
    let StatisticalItem = "";
    StatisticalItem =
        `
  <div class="header">
  <div class="STT">STT</div>
  <div class="Statistical-PRODUCT-TYPE">LOẠI</div>
  <div class="Statistical-PRODUCT-NAME">SẢN PHẨM</div>
  <div class="Statistical-PRICE">GIÁ</div>
  <div class="QUALITY">SỐ LƯỢNG</div>
  <div class="TOTAL">TỔNG</div>
  </div>
  `
    let i = 1;
    let list = table.list;
    list.forEach(element => {
        StatisticalItem += `
    <div class="Statistical-item">
        <div class="STT">${i++}</div>
        <div class="Statistical-PRODUCT-TYPE">${element.type}</div>
        <div class="Statistical-PRODUCT-NAME">${element.productName}</div>
        <div class="Statistical-PRICE">${format2(parseInt(element.price), 'đ')}</div>
        <div class="QUALITY">${element.quantity}</div>
        <div class="TOTAL">${format2(parseInt(element.quantity * element.price), 'đ')}</div>
    </div>
    `
    });
    StatisticalItem += `
    <div class="footer">
        <div class="line">Tổng doanh thu trong tháng ${month}</div>
        <div class="Total-revenue">${format2(parseInt(table.total), 'đ')}</div>
    </div>
    `

    StatisticalDisplay.innerHTML = StatisticalItem;
}

function format2(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}