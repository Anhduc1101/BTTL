// bt7: [Thực hành] HÀM VIẾT HOA CHỮ CÁI ĐẦU TIÊN
// Tạo hàm biến ký tự đầu tiên ở mỗi từ thành chữ in hoa

function capitalize(str) {
    let words = str.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
let a = "hello WORD";
let b = "rIkkEi acaDEMY";
console.log(capitalize(a)); // Hello word 
console.log(capitalize(b)); // Rikkei Academy 