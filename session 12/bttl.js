//bt1:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên dương hay ko?,
//Nếu có thì tính tổng từ 1 đến số vừa nhập.

// ==================phân tích bài toán==================
// b1:nhập vào số n
// let n = +prompt("Nhập vào 1 số:");
// let sum = 0;

// //b2: kiểm tra xe mn có phải số nguyên dương ko?
// if (n > 0) {
//     //b3: thực hiện vòng lặp tính tổng
//     for (i = 0; i <= n; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }


//bt2:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?,
//Nếu có thì tính kết quả biểu thức: B=1x2x3x...xn

// let n = +prompt("Nhập vào 1 số:");
// let pro = 1;
// if (n > 0) {
//     for (i = 1; i <= n; i++) {
//         pro *= i;
//     }
//     console.log(pro);
// }


//bt3:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?,
//Nếu có thì tính kết quả biểu thức: C=1+1/2+1/3+...+1/n
// let a = +prompt("Nhập vào 1 số:");
// let sum = 0;
// if (a > 0) {
//     for (i = 0; i < a; i++) {
//         sum += 1 / a;
//     }
//     console.log(sum);
// }


//bt4:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?,
//Nếu có thì tính kết quả biểu thức: C=1x1/2 + 1/2x1/3 + 1/3x1/4 +...+1/(n-1)x1/n
// let a = +prompt("Nhập vào 1 số:");
// let sum = 0;
// if (a > 1) {
//     for (i = 2; i < a; i++){
//         sum = sum + ((1 / (i - 1)) * (1 / i));
//     }
//     console.log(sum);
// }


//bt5:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?(0<n<10)
//nếu ko hợp lệ thì nhập lại
//Nếu có thì tính in ra bảng cửu chương của số đó
//ví dụ: input 8 ====>>>>> 8x1=8
//                         8x2=16
//                         ......
//                         8x10=80

// let a;
// do {
//     a = +prompt("Nhập vào 1 số từ 1 đến 9");
// } while (a < 1 || a > 9);
// let b;
// for (i = 0; i <= 10; i++) {
//     b = a * i;
//     console.log(`${a}x${i}=${b}`);
// }


//bt6:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?
//Nếu có thì in ra màn hình console dãy số fibonaci n phần tử và tính tổng đến n phần tử của nó

//ví dụ: input n=13
// output:0, 1, 1, 2, 3, ......, 144 (13 số)

// let n = +prompt("Nhập vào 1 số :");
// let a = 0;
// let b = 1;
// let sum = 0;
// let c = 0;
// for (i = 1; i <= n; i++) {
//     if (i == 1) {
//         console.log(a);
//     } else if (i == 2) {
//         console.log(b);
//     } else {
//         c = a + b;
//         a = b;
//         b = c;
//         console.log(c);
//     }
//     sum = sum + c;
// }
// console.log(sum);


//bt7:
//viết một đoạn mã code cho phép người nhập vào một số n
//kiểm tra xem n có phải là số nguyên hợp lệ  hay ko?
//Nếu ko thì cho nhập lại
//Nếu có thì in ra màn hình console các số từ 0-n theo dạng chẵn lẻ

//Input: n=5
//output:
// 1 - lẻ
// 2 - chẵn
// 3 - lẻ
// 4 - chẵn

// let n;
// do {
//     n = +prompt("Nhập vào 1 số:")
// } while (n <= 0);
// for (i = 1; i <= n; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} là số chẵn`);
//     } else {
//         console.log(`${i} là số lẻ`);
//     }
// }


//bt8:
//Viết một đoạn mã cho phép người dùng nhập vào một số nguyên dương n.
//Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không.Nếu đó là số hợp lệ,
// tiến hành in ra màn hình console các số chẵn trước, sau đó in ra các số lẻ sau

// Input: n = 5
// 	Expected output:
// 0
// 2
// 4
// 1
// 3
// 5

// let n;
// do {
//     n = +prompt("Nhập vào 1 số:")
// } while (n <= 0);
// for (i = 0; i <= n; i = i + 2) {
//     if (i % 2 == 0) {
//         console.log(`${i} là số chẵn`);
//     }
// }
// for (i = 1; i <= n; i = i + 2) {
//     console.log(`${i} là số lẻ`);
// }


// Bt11:Viết một đoạn mã mô phỏng máy ATM.Cho người dùng nhập vào số tiền cần rút.
//Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.
//Biết máy ATM chỉ rút được 3 loại mệnh giá là 500.000, 200.000, 100.000, 50.000.
//Biết số tiền tối thiểu rút một lần là 50.000


// Input: n = 550.000
// 	Expected output:
// 500.000 - 1
// 50.000 - 1


// Input: n = 2.850.000
// 	Expected output:
// 500.000 - 5
// 200.000 - 1
// 100.000 - 1
// 50.000 - 1

// Input: n = 2.855.000
// 	Expected output:
// Số tiền bạn rút phải là bội số của 50.000

// let t = 0;
// let a = b = c = d = 0;
// do {
//     t = +prompt("Nhập số tiền muốn rút:");
// } while (t <= 0 || t % 50000 !== 0);

// while (t > 0) {
//     if (t >= 500000) {
//         t = t - 500000;
//         a++;
//     } else if (t >= 200000) {
//         t = t - 200000;
//         b++;
//     } else if (t >= 100000) {
//         t = t - 100000;
//         c++;
//     } else {
//         t = t - 50000;
//         d++;
//     }
// }
// if (a > 0) {
//     console.log(`500000 - ${a} tờ`);
// }
// if (b > 0) {
//     console.log(`200000 - ${b} tờ`);
// }
// if (c > 0) {
//     console.log(`100000 - ${c} tờ`);
// }
// if (d > 0) {
//     console.log(`50000 - ${d} tờ`);
// }

// Bt11-NC:Viết một đoạn mã mô phỏng máy ATM.Cho người dùng nhập vào số tiền cần rút.
//Sau đó in ra tổng số tờ tiền mà người dùng nhận được với từng loại mệnh giá.

let t = 0;
let a = b = c = d = e = f = g = h = i = k = 0;
do {
    t = +prompt("NHập vào số tiền muốn rút:");
} while (t <= 0);
while (t > 0) {
    if (t >= 500000) {
        t -= 500000;
        a++
    } else if (t >= 200000) {
        t -= 200000;
        b++;
    } else if (t >= 100000) {
        t -= 100000;
        c++;
    } else if (t >= 50000) {
        t -= 50000;
        d++;
    } else if (t >= 20000) {
        t -= 20000;
        e++;
    } else if (t >= 10000) {
        t -= 10000;
        f++;
    } else if (t >= 5000) {
        t -= 5000;
        g++;
    } else if (t >= 2000) {
        t -= 2000;
        h++;
    } else if (t >= 1000) {
        t -= 1000;
        i++;
    } else {
        t -= 500;
        k++;
    }
}
if (a > 0) {
    console.log(`500000 - ${a} tờ`);
}
if (b > 0) {
    console.log(`200000 - ${b} tờ`);
}
if (c > 0) {
    console.log(`100000 - ${c} tờ`);
}
if (d > 0) {
    console.log(`50000 - ${d} tờ`);
}
if (e > 0) {
    console.log(`20000 - ${e} tờ`);
}
if (f > 0) {
    console.log(`10000 - ${f} tờ`);
}
if (g > 0) {
    console.log(`5000 - ${g} tờ`);
}
if (h > 0) {
    console.log(`2000 - ${h} tờ`);
}
if (i > 0) {
    console.log(`1000 - ${i} tờ`);
}
if (k > 0) {
    console.log(`500 - ${k} tờ`);
}

