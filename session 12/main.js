// biến cục bộ , biến toàn cục

// biến cục bộ (nằm trong 1 phạm vi giới hạn)
// biến toàn cục (không giới hạn phạm vi, có thể truy cập ở bất cứ đâu sau khi khai báo nó)

// ví dụ:
let global="Đức";
for (let i = 0; i < 10; i++){
    let local = "nam";
    console.log(global);
    console.log(local);
}
ocnsole.log(global);