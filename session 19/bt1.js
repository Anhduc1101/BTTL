
// Tham số đầu tiên của câu lệnh insertAdjacentHTML là vị trí mà bạn append thẻ HTML mới vào trong một container bất kỳ

// const container = document.getElementById("list");
// for (let i = 0; i < 3; i++) {
//     container.insertAdjacentHTML(`beforebegin`, `<li>${i}</li>`) // 0 1 2
//     container.insertAdjacentHTML(`afterbegin`, `<li>${i}</li>`)
//     container.insertAdjacentHTML(`beforeend`, `<li>${i}</li>`)
//     container.insertAdjacentHTML(`afterend`, `<li>${i}</li>`)
// }


// let lis = document.getElementsByTagName("li"); // Sử dụng getElementsByTagName lấy toàn bộ thẻ < li >.
// console.log(lis[0]); // Sau đó in (log) phần tử đầu tiên(<li>News</li>).
// for (i = 0; i < lis.length; i++) { // Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection < li > lấy được.
//     console.log(lis[i]);
// }


// let singer = document.getElementsByTagName("div");// Sử dụng getElementsByTagName lấy toàn bộ thẻ < div >.
// console.log(singer[0]);// Sau đó in (log) phần tử đầu tiên(<div class=” singer”>Nate Ruess</div>).
// for (i = 0; i < singer.length; i++) {// Sau đó sử dụng for loop để in toàn bộ các phần tử có trong collection < div > lấy được.
//     console.log(singer[i]);
// }

// 7.1 Bắt sự kiện ‘click’ từ 2 nút khác nhau có id=”button1” và id=”button2”,
// ở trong body của 2 hàm callback, log ra thuộc tính e.target.
// Thuộc tính này có ý nghĩa như thế nào ?
let btn1 = document.getElementById("button1")
btn1.addEventListener('click', (e) => {
    console.log(e.target);
});
let btn2 = document.getElementById("button2")
btn2.addEventListener('click', (e) => {
    console.log(e.currentTarget);
});

// 7.2 Bắt sự kiện ‘keydown’ từ thẻ input, ở trong body hàm callback, log ra thuộc tính e.key.
// Thuộc tính này có ý nghĩa như thế nào ?
let btn3 = document.getElementById("button3");
btn3.addEventListener("keydown", function (e) {
    console.log(e.key);
})

// 8. Viết một function, sử dụng alert để in ra tên bạn và điều bạn muốn ước trong năm nay
function show(value) {
    console.log(value);
}

// 9. Viết một function, sử dụng alert để in ra name của người dùng và wish của người dùng trong năm nay,
// name và wish là parameters của function
function nameWish(name, wish) {
    if (wish == "") { // 10. Validate trường hợp wish bị truyền thiếu trong function
        console.log("thieu dieu uoc");
    } else {
        console.log(name, wish);
    }

}

// 10. Viết một function, sử dụng alert để in ra name của người dùng và wish của người dùng trong năm nay,
//  name và wish là parameters của function.

// 11. Cho User interface sau
// 11.2 Lấy ra ‘Upper it!!’ button
let upperIt = document.getElementById("up");
console.log(upperIt);

// 11.3 Bắt sự kiện click của ‘Upper it!!!!’ button       onclick=""

// 11.4 Lấy ra ‘Enter your name’ input
let input = document.getElementById("input");
console.log(input);

//11.5 Lấy ra username từ input
function layUser() {
    console.log(input.value);
    console.log(input.value.toUpperCase()); // 11.6 Chuyển đổi username thành dạng viết hoa
}


// 11.7 Lấy ra thẻ chứa ‘Your result will appear here’
let result = document.querySelector("h3");
console.log(result);

// 11.8 Cập nhật ‘Your result will appear here’ thành tên người dùng được viết hoa
function doi() {
    result.innerHTML = input.value;
}