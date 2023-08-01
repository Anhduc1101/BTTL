// bt3: [Thực hành] Tìm giá trị nhỏ nhất của mảng
//         Xây dựng hàm nhận vào một tham số là một mảng cho trước.
//         Hàm thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó.
//         Sử dụng hàm vừa xây dựng trên với mảng như sau:
arr1: [3, 5, 1, 8, -3, 7, 8]
arr2: [7, 12, 6, 9, 20, 56, 89]
arr3: []
arr4: [0, 0, 0, 0, 0, 0]

function minArray(arr) {
    let min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
// let arr2: [7, 12, 6, 9, 20, 56, 89];
// let arr3: [];
// let arr4: [0, 0, 0, 0, 0, 0];
let min1 = minArray(arr1);
// let min2 = minArray(arr2);
// let min3 = minArray(arr3);
// let min4 = minArray(arr4);
alert(min1);
// alert(min2);
// alert(min3);
// alert(min4);
function minArray(arr) {
    if (arr.length == 0)
        return -1;
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}