// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó
// Cách 1:
// let arr = prompt("Nhập vào độ dài của mảng:")
// let arr1 = [];
// for (i = 1; i <= arr; i++) {
//     let n = prompt(`Nhập vào số thứ ${i}:`);
//     arr1.push(n);
// }
// function findMin(arr) {
//     let min = arr[0];
//     for (i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(findMin(arr1));

// Cách 2:
// let a = prompt("Nhập vào a:");
// let b = prompt("Nhập vào b:");
// let c = prompt("Nhập vào c:");
// function findMin(a, b, c) {
//     if (a < b && a < c) {
//         return a + " là min";
//     } else if (b < a && b < c) {
//         return b + " là min";
//     } else {
//         return c + " là min";
//     }
// }
// console.log(findMin(a, b, c));

// Bài 3: Cho mảng sau:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Viết hàm trả về tất cả các cặp số có tổng bằng 10
// function sumEqual10(arr) {
//     for (i = 0; i < arr.length - 1; i++) {
//         for (j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == 10) {
//                 console.log(arr[i], arr[j]);
//             }
//         }
//     }
// }
// sumEqual10(arr);


// Bài 4: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng
// Cách 1:
// let chuoi = prompt("Nhập vào chuỗi ký tự bất kì:"); // nhap chuoi minh can
// let chuDaXet = []; // mang luu cac chu minh da dem so lan cho no
// function countRepeat(chu) {

//     for (i = 0; i < chuDaXet.length; i++) {
//         if (chu == chuDaXet[i]) {
//             return;
//         }
//     }

//     let count = 0;
//     for (i = 0; i < chuoi.length; i++) {
//         if (chu == chuoi[i]) {
//             count++;
//         }
//     }
//     chuDaXet.push(chu);
//     return count;
// }

// for (let i = 0; i < chuoi.length; i++) {
//     let count = countRepeat(chuoi[i]);

//     if (count != undefined) {
//         console.log(`Chu ${chuoi[i]} xuat hien ${count} lan`);
//     }
// }

// Cách 2:
function handleSubmit() {
    // lấy ra chuỗi/ giá trị của ô input
    let value = document.getElementById("input").value;
    console.log(value);
    value = value.toLowerCase();

    // tạo 1 mảng để chứa danh sách các ký tự và số lần xuất hiện của nó
    let array = []; // mảng 2 chiều, ký tự sẽ lưu ở phần tử só 0 của mảng con

    // duyệt từng ký tự của chuỗi trong ô input và kiểm tra
    for (i = 0; i < value.length; i++) {
        let index = checkExistCharacter(array, value.charAt(i)); // charAt : dùng để duyệt chuỗi
        if (index >= 0) { // nếu ký tự i tồn tại trong mảng array
            // nếu đã tồn tại ký tự, phải sửa số lần xuất hiện
            // for (let i = 0; i < array.length; i++) {
            //     if (array[i][0] == value.charAt(i)) {
            //         array[i][i] += 1;
            //     }
            array[index][1] += 1;
        } else {
            // chưa tồn  tại
            array.push([value.charAt(i), 1]);
        }
    }
}
for (let i = 0; i < array.length; i++){
    console.log((`Ký tự ${array[i][0]} xuất hiện ${array[i][1]} lần`));
}

// kiểm tra tồn tại của 1 ký tự ở trong 1 mảng và trả về vị trí của phần tử nếu tồn tại
// nếu ko tồn tại thì trả về -1
function checkExistCharacter(arr, char) { // arrl à mảng 2 chiều [[`a,2`],[`b,1`],....]
    for (i = 0; i < arr.length; i++) {

        // phần tử con arr[i]
        if (arr[i][0] == char) {
            // tồn tại
            return i;
        }
    }
    // chưa tồn tại
    return -1;
}


// Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo

// function tinhGiaiThua(x) {
//     let multi = 1;
//     for (let i = 1; i <= x; i++) {
//         multi *= i;
//     }
//     return multi;
// }
// console.log(tinhGiaiThua(0));


// Bài 6: Cho người dùng nhập vào chuỗi số bất kì. Viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// let number = prompt("Nhập vào 1 chuỗi số bát kì:");
// let arr = number.split(",")
// console.log(arr.sort((a, b) => a - b).join(","));





