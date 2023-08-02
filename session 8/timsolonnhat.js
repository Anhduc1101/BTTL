// nhập giá trị a,b,c
let a = +prompt("Nhập vào số a:")
let b = +prompt("Nhập vào số b:")
let c = +prompt("Nhập vào số c:")
// giả sử a lớn nhất

//so sánh a với b và c
if (a < b || a < c) {
    //b lớn hơn a
    if (b < c) {
        //c lớn nhất
        console.log("Số lớn nhất là c" + c);
    } else {
        //b lớn nhất
        console.log("Số lớn nhất là b" + b);
    }
} else {
    console.log("Số lớn nhất là a" + a);
}