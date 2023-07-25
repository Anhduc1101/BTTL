// game đoán số , từ 1->10
// có 3 lần đoán , mỗi đoán xong néu sai thì sẽ gợi ý
//  game dừng khi đoán đúng
let count = 1;
let number;

let random = Math.round(Math.random() * 9) + 1;
console.log(random);
while (count <= 3) {
    number = +prompt("Nhập số muốn đoán  1-10");
    if (count == 3) {
        // nếu lượt đoán thứ 3
        if (number == random) {
            alert("you win");
            break;
        } else {
            alert("you lose");
        }
    } else {
        // chưa đến lượt thứ 3
        if (number == random) {
            alert("you win");
            break;
        } else if (number < random) {
            alert(`Lơn hơn ${number} , bạn còn ${3 - count} lần`);
        } else {
            alert(`Bé hơn ${number} , bạn còn ${3 - count} lần`);
        }
    }
    count++;
}
