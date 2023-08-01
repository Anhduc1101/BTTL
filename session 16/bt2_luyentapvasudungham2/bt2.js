// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// function isSquare(a) {
//     var a = a * a;
//     console.log(a);
// }

// isSquare(5)
// isSquare(15)
// isSquare(25)
// isSquare(5)


// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được.
// function calculateAreaAndPerimeter(r) {
//     let area = Math.round(Math.PI * r * r);
//     let perimeter = Math.round(0.5 * Math.PI * r);
//     console.log(`Diện tích hình tròn là ${area}`);
//     console.log(`Chu vi hình tròn là ${perimeter}`);
// }
// calculateAreaAndPerimeter(5)
// calculateAreaAndPerimeter(10)
// calculateAreaAndPerimeter(15)
// calculateAreaAndPerimeter(20)


// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào.Gọi hàm vừa xây dựng được.
function isFactorial(x) {
    let multi = 1;
    for (i = 1; i <= x; i++){
        multi *= i;
    } 
   return multi;
}
console.log(isFactorial(4));