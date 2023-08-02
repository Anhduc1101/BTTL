
let a = +prompt('Nhập số a :');
let b = +prompt('Nhập số b :');
let c = +prompt('Nhập số c :');
let delta = b * b - 4 * a * c;
if (delta < 0) {
    document.write('Phương trình vô nghiệm');
}
else {
    if (delta == 0) {
        let x = (-b) / (2 * a);
        document.write('Nghiệm của phương trình là x1 =  x2 =' + x);
    }
    else {
        let x1 = (-b + Math.sqrt(delta)) / 2 * a;
        let x2 = (-b - Math.sqrt(delta)) / 2 * a;
        document.write(`Phương trình có 2 nghiệm phân biệt là X1 = ${x1} X2 = ${x2}`);
    }
}
