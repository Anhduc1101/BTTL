// Nhập vào các số nguyên đến khi nhập số 0 thì dừng lại
// hiển thị tổng của các số vừa nhập (chẵn vừa nhập)

let n = 1;
let sum = 0;
while (n != 0) {
    //nhập 1 số
    n = +prompt("Nhập 1 số nguyên:");
    // if (n % 2 == 0) {
    // }
    sum += n;
}
// dừng vòng lặp- hiển thị ra tổng các số vừa nhập
// sum += n; // cho kết quả = 0 vì "let sum=0;"
alert("Tổng các số vừa nhập là:" + sum);
