let w = prompt("Nhập cân nặng:");
let h = prompt("Nhập chiều cao:");
let BMI = w / (h * h);
document.write("Chỉ số BMI của bạn là:" + BMI);
if (BMI < 18.5) {
    document.write("Cân nặng tháp (gầy)")
} else if (BMI >= 18.5 && BMI < 24.9) {
    document.write("Bình thường")
} else if (BMI > 25 && BMI <= 29.9) {
    document.write("Tiền béo phì")
} else if (BMI > 30 && BMI <= 34.9) {
    document.write("Béo phì độ I")
} else if (BMI > 35 && BMI <= 39.9) {
    document.write("Béo phì độ II")
} else {
    document.write("Béo phì độ III")
}