// in ra 20 số fibonaci đầu tiên
//f0=0, f1=1 : 2 số fibonaci đầu tiên
//f2=f1+f0=1+0=1;
//=> f3=2, f4=3,f5=5,f6=8....

//đếm số lượng số in ra
let count = 0;
let a = 0; //số fn-2
let b = 1; //số fn-1
for (i = 1; i <= 20; i++) { //i=1, i<=20: i chạy từ 1 đến 20 = 20 số; nếu khai báo i=0 thì i cahyj từ 0 đến 20 thành 21 số
    if (i == 1) {
        //f1=0
        console.log(a);
    } else if (i == 2) {
        //f2=1
        console.log(b);
    } else {
        // fn = fn - 1 + fn - 2
        let c = a + b;
        a = b;
        b = c;
        console.log(c);
    }
}
