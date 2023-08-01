// // bt4: [Thực hành] HÀM KIỂM TRA ĐỐI XỨNG
// // Cho người dùng nhập vào chuỗi kí tự và viết hàm kiểm tra xem đó có phải chuỗi kí tự đối xứng không?

let input = prompt("Nhập vào chuỗi kí tự bất kì");

function isPalindrome(str) {
    // Chuyển chuỗi về dạng chữ thường và loại bỏ khoảng trắng và dấu câu
    str = str.toLowerCase().replace(/[a - zA - Z0 - 9]/g, "");

    // Đảo ngược chuỗi
    let reversed = str.split("").reverse().join("");

    // So sánh chuỗi gốc với chuỗi đảo ngược
    return str === reversed;
}
// console.log(isPalindrome(input));
console.log(isPalindrome(input));
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // false
