// bt1: [Thực hành] Tạo và gọi hàm.
// Sử dụng hàm confirm để nhận thông tin đầu vào và đưa ra quyết định dựa trên những thông tin đó.

function processConfirm(answer) {
    let result = "";
    if (answer) {
        result = "Excellent. We'll play a nice game of chess.";
    } else {
        result = "Maybe later then.";
    }
    return result;
}
let confirmAnswer = confirm("Shall we play a game?");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer);  