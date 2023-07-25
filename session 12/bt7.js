// kiểm tra 1 số có phải là số nguyên tố hay ko?
//SNT là số có 2 ước là 1 và chính nó phải >1

//Cách 1: đếm số ước
// let number = 1024;
// let count = 0;
// let sum = 0;
// for (i = 1; i < number; i++) {
//     if (number % i == 0) {
//         console.log(i);
//         count++;
//         sum += i;
//     }
// }
// console.log(sum);
// if (count == 2) {
//     console.log("là số nguyên tố");
// } else {
//     console.log("ko là số nguyên tố");
// }


//cách 2: tìm xem có ước nào trong khoảng từ 2 đến < number ko?
let count = 0;
let number = 2;
while (true) {
    if (count == 20) {
        break;
    }
    let flag = true; //giả sử flag = true là số NT
    for (let i = 2; i < number; i++) {//kiểm tra xem có tồn tại 1 ước nào
        // trong khoảng từ 2 đến number
        if (number % i == 0) {
            // tồn tại 1 ước
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(number);
        count++;
    }
    number++;
}
