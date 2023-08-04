// Bài 1: Cho mảng như sau:
// let products = [{ id: 1, name: "Milk", count: 100 },
// { id: 2, name: "Butter", count: 100 },
// { id: 3, name: "Yakult", count: 100 }];

// // Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
// products.push({ id: 4, name: "Water", count: 50 })

// Xóa đối tượng có id là 2
// let id = 2;
// let index = products.findIndex(value => value.id == 2);
// if (index != -1) {
//     products.splice(index, 1);
// }
// console.log(products);


// //Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
// let id = 3;
// let index = products.findIndex(value => value.id == 3);
// if (index != -1) {
//     products[index].count = 0; // gọi/ cập nhật lại giá trị count=0
// }
// console.log(products);


// Cho từ khóa “Butter”.
// Kiểm tra từ khóa có trong mảng “products” hay không ?  for
// Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”  if-else
// cách 1:
// let check = false;
// let index;
// for (i = 0; i < products.length; i++) {
//     if (products[i].name == "Butter") {
//         check = true;
//         index = i;
//         break;
//         // console.log(index);
//     }
// }
// if (check) {
//     console.log(products[index]);
// } else {
//     console.log("Không có dữ liệu bạn tìm kiếm");
// }

// // cách 2:
// let index = products.filter(value => value.name == "Butter");
// console.log(index);










