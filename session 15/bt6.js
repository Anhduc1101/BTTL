// bt6: [Thực hành] HÀM TÍNH TỔNG CÁC PHẦN TỬ TRONG MẢNG
// Tổng số phần tử có trong mảng

function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return (sum);
}
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = [10, 20, 30, 40, 50];
let arr3 = [1, 3, 5, 7, 9];
console.log(sum(arr)); //21 
console.log(sum(arr2));//150 
console.log(sum(arr3));//25 