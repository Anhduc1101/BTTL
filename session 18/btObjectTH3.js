// Bài 3: Tạo một đối tượng User chưa thông tin người dùng bao gồm: tên, email, địa chỉ, điện thoại.
let list = [];
class User {

    constructor(name, email, address, tel) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.tel = tel;
        this.role = 0; // Thêm thuộc tính “role” vào 2 đối tượng  và User(value = 0)
    }
}
// Tạo class Admin kế thừa từ class User.
class Admin extends User {

    constructor(name, email, address, tel) {
        super(name, email, address, tel);
        this.role = 1; // Admin(value = 1)
    }
}

// Tạo danh sách người dùng(dạng mảng) và thêm vào 3 user, 1 admin

let user1 = new User("A", "a@gamil.com", "PDC", "098-xxx-xxx");
let user2 = new User("B", "b@gamil.com", "PDC", "098-xxx-xxx");
let user3 = new User("C", "c@gamil.com", "PDC", "098-xxx-xxx");
let admin1 = new Admin("D", "D@gamil.com", "PDC", "098-xxx-xxx");
list.push(user1, user2, user3, admin1);
console.log(list);

// Xóa người dùng thông qua tên của họ(không xóa được admin)

let del = prompt("Nhap ten vao:");
let check = false;
for (i = 0; i < list.length; i++) {
    if (list[i].name == del) {
        if (list[i].role == 0) {
            check = true;
            list.splice(i, 1);
        } else if (list[i].role == 1) {
            check = true;
            console.log("khong the xoa Admin");
        }
    }
}
if (check == false) {
    console.log("0 ton tai");
}
console.log(list);

// Sửa thông tin người dùng thông qua id(không sửa được thông tin admin)

let suaId = prompt("nhap ID muon sua:");
if (list[suaId].role == 0) {
    let suaIdUser = prompt("Nhap thong tin sua cho user(name, email, address,tel):");
    if (suaIdUser == "name" || suaIdUser == "email" || suaIdUser == "address" || suaIdUser == "tel") {
        list[suaId][suaIdUser] = prompt("sua thuoc tinh");
    }
} else {
    alert("khong dc sua");
}

// Thêm 1 nick admin vào mảng danh sách người dùng.Sau đó tìm kiếm toàn bộ thông tin các tài khoản là admin và in ra

let admin2 = new Admin("E", "E@gamil.com", "PDC", "098-xxx-xxx");
list.push(admin2);
let findAdmin = list.filter((value) => {
    return 1 == value.role;
});
console.log(findAdmin);
