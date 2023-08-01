// bt2: [Thực hành] Chuyển đổi nhiệt độ
// Xây dựng hàm để chuyển đổi từ độ F cho trước sang độ C theo công thức sau: C = (F - 32)/1.8 -->

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = Math.round(((valNum - 32) / 1.8), 1);
}