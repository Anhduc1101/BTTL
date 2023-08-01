// Bài 1: Viết chương trình tạo hàm tính tổng 2 số

// function sumNumbers(a, b) {
//     let sum = a+b;
//     return sum;
// }
// console.log(sumNumbers(1, 2)); 


// bài 2: viết chương trình tạo hàm tính diện tích và chu vi hình tròn

// chức năng: tính diện tích, chu vi hình tròn
// tên hàm: calculateAreaAndPerimeterOfCircle
// tham số đầu vào: bán kính r
// gái trị trả về: 1 mảng 2 phần tử gồm diện tích và chu vi


// function calculateAreaAndPerimeterOfCircle(radius) {
//     let area = Math.round(Math.PI * radius * radius);
//     let perimeter = Math.round(2 * Math.PI * radius);
//     return [area, perimeter];
// }

// // kiểm tra hàm hoạt động không?
// // th1 r=5
// console.log(calculateAreaAndPerimeterOfCircle(5));

// Bài 3:Viết chương trình tạo hàm kiểm tra xem ký tự nhập vào có phải ký tự số hay ko?

// isNaN();
// console.log(isNaN("abcasd"));
// Cách 1:
// function checkNotANumber(string) {
//     if (!isNaN(string)) {
//         return "là số";
//     } else {
//         return "ko là số";
//     }
// }
// console.log(checkNotANumber("1"));
// //***************************************************** */
// //Cách 2:
// function isANumber(string) {
//     return !Object.is(parseInt(string), NaN); //hàm so sánh
// }
// //isNaN
// console.log(isANumber("string"));
// console.log(isANumber(3));


// // ví dụ:
// function demoVariableArea(number) {
//     let n = 2;
//     if (n > 4) {
//         let check = true;
//         console.log(check);
//     }
//     for (let i = 0; i < n; i++){
//         let sum = 0;
//         sum += i;
//     }
// }


// Bài 4: Viết chương trình cho người dùng nhập vào một số,
// kiểm tra xem số đưa vào có phải nguyên dương không ?
// Nếu đung trả vè true, sai trả về false

// function integer(number) {
//     return number >= 0;
// }
// console.log(integer(1));


// Bài 5: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ 2 số nguyên đó
// let a = 1;
// let b = 2;
// let arr1 = [a, b];
// console.log(arr1);
// function isSwap(arr) {
//     [a, b] = [b, a];
//     return [a,b]
// }
// console.log(isSwap([a,b]));
