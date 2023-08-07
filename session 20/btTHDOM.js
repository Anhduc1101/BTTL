let productList = [{
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0lvb9jwfja7gKAVfKfj86ZEJCkPs6xgkdtWPoBZMeg&s",
    name: "productName1",
}, {
    id: 2,

    name: "productName2",
}, {
    id: 3,
    name: "productName3",
}, {
    id: 4,
    name: "productName4",
}];

let idUpdateGlobal = null

// chuc nang hien thi
function display() {
    let str = "";
    for (i = 0; i < productList.length; i++) {
        const element = productList[i];
        str = str + ` <tr>
                <td>${i + 1}</td>
                <td><img src="${element.img}"></td>
                <td>${element.name}</td>
                <td><button onclick="editProductList(${element.id})">Edit</button> <button onclick="deleteProductList(${element.id})">Delete</button></td>
            </tr>`
    }
    document.getElementById("newList").innerHTML = "";
    document.getElementById("newList").innerHTML = str;
}
display();


// chuc nang add (Create)
function addNewProducList() {

    if (idUpdateGlobal != null) {
        productList[idUpdateGlobal].name = document.getElementById("enterNewStr").value
        // productList[idUpdateGlobal].img = document.getElementById("enterNewImg").value
        idUpdateGlobal = null
        display()
        document.getElementById("enterNewStr").value = ""
        document.getElementById("enterNewImg").value = ""
        return
    }

    let newProductName = document.getElementById("enterNewStr").value; // lấy dữ liệu đã đc nhập vào từ ô input
    let newId = getNewId(); // tạo đối tượng newId để hứng giá trị của hàm getNewId()
    let newImg = document.getElementById("enterNewImg").value;
    let newProduct = { // tạo đối tượng mới với những giá trị tương ứng mà ng dùng nhập vào
        id: newId,
        img: newImg,
        name: newProductName
    }
    productList.push(newProduct); // sau khi nhập giá trị mới vào thì đẩy giá trị mới đó vào mảng ban đầu
    display(); // gọi hàm hiển thị
    document.getElementById("enterNewStr").value = ""; // reset ô input về trạng thái ban đầu
    document.getElementById("enterNewImg").value = ""; // reset ô input về trạng thái ban đầu
}


// chuc nang Delete
function deleteProductList(idDelete) {
    if (confirm("Ban co chac chan muon xoa khong?")) {
        // lay ra id can xoa
        let indexDelete = productList.findIndex(value => value.id == idDelete);
        // xoa theo splice
        productList.splice(indexDelete, 1);
    }
    // cap nhat lai giao dien
    display();
}

// chuc nang Update
// update1: chinh sua Edit
function editProductList(idEdit) {
    let indexEdit = productList.findIndex(value => value.id == idEdit);
    idUpdateGlobal = indexEdit;
    console.log(idUpdateGlobal);
    let productListEdit = productList[indexEdit];
    // document.getElementById("productListId").value = productListEdit.id;
    document.getElementById("enterNewImg").value = productListEdit.img;
    document.getElementById("enterNewStr").value = productListEdit.name;
}

// update2: update
function updateProductList(idUpdate) {
    // let updateId = document.getElementById("productListId").value;
    let updateImg = document.getElementById("enterNewImg").value;
    let updateName = document.getElementById("enterNewStr").value;
    let updateIndex = productList.findIndex(value => value.id == idUpdate);
    productList[updateIndex] = {
        id: updateId,
        img: updateImg,
        name: updateName
    }
    display();
}

function getNewId() {
    let idMax = 0;
    for (i = 0; i < productList.length; i++) {
        const element = productList[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    }
    return idMax + 1;
}
