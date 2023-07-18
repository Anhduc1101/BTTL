let vatly = +prompt("nhập điểm lý:");
let hoahoc = +prompt("nhập điểm hóa:");
let toanhoc = +prompt("nhập điểm toán:");
let tong = (+vatly + hoahoc + toanhoc);
let trungbinh = (+vatly + hoahoc + toanhoc) / 3;
document.writeln("Bài tập 1");
document.writeln("điểm tổng 3 môn là:" + tong + "\n");
document.writeln("điểm trung bình là: " + trungbinh);