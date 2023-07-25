// số hoàn hảo: là số có tổng các ước nhỏ hơn nó = chính nó
//ví dụ só 6 có các ước : 1,2,3 và tổng của 1+2+3=6 =>> 6 là số hoàn hảo

//kiểm tra 1 số nhập vào có phải số hoàn hảo hay ko?
//B1: nhập vào 1 số
let n = +prompt("Nhập vào 1 số:");
//B2: kiểm tra từ 1 đến chính nó xem nếu là ước của số đó thì thực hiện tính tổng
let sum = 0;
for (let i = 1; i < n; i++) {
    if (n % i == 0) {
        sum += i;
    }
}
if (sum == n) {
    alert(`${n} là số hoàn hảo!`);
} else {
    alert(`${n} là số không hoàn hảo!`);
}
//B3: kết thúc vòng lặp, tiến hành so sánh tổng thu được với chính nó và đưa ra kết luận



