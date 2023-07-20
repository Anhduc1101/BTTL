// bai tap kiem tra nam nhuan
let year = +prompt("Nhập vào số năm:");

// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 !== 0) {
//             //nhuận
//         } else {
//             //ko nhuận
//         }
//     } else {
//         //nhuận
//     }
// } else {
//     //ko nhuận
// }
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + " is a leap year");
        } else {
            alert(year + " is NOT a leap year");
        }
    } else {
        alert(year + " is a leap year");
    }
} else {
    alert(year + " is NOT a leap year");
}