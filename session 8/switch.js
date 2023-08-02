// so sánh bằng switch case

// let choice = +prompt("Nhập vào 1 số bất kì:")
// switch (choice) {
//     case 0:
//         //khối code thực thi
//         document.write("số không");
//         break;
//     case 1:
//         //khối code thực thi
//         document.write("số một");
//         break;
//     case 2:
//         //khối code thực thi
//         document.write("số hai");
//         break;
//     case 3:
//         //khối code thực thi
//         document.write("số ba");
//         break;
//     case 4:
//         //khối code thực thi
//         document.write("số bốn");
//         break;
//     case 5:
//         //khối code thực thi
//         document.write("số năm");
//         break;
//     case 6:
//         //khối code thực thi
//         document.write("số sáu");
//         break;
//     case 7:
//         //khối code thực thi
//         document.write("số bảy");
//         break;
//     case 8:
//         //khối code thực thi
//         document.write("số tám");
//         break;
//     case 9:
//         //khối code thực thi
//         document.write("số chín");
//         break;
//     default:
//         document.write("Không hợp lệ")
// }

//bt đếm số ngày trong 1 tháng
let choice = +prompt("nhập số tháng:");
switch (choice)
// {
//     case 1:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 2:
//         document.write("tháng" + choice + "có 28 hoặc 29 ngày");
//         break;
//     case 3:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 4:
//         document.write("tháng" + choice + "có 30 ngày");
//         break;
//     case 5:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 6:
//         document.write("tháng" + choice + "có 30 ngày");
//         break;
//     case 7:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 8:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 9:
//         document.write("tháng" + choice + "có 30 ngày");
//         break;
//     case 10:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     case 11:
//         document.write("tháng" + choice + "có 30 ngày");
//         break;
//     case 12:
//         document.write("tháng" + choice + "có 31 ngày");
//         break;
//     default:
//         document.write("Không biết tháng này ở hành tinh nào !!!")
// }
{
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write(`Số ngày trong tháng ${choice} là 31 ngày`)
        break;
    case 2:
        console.log(`Số ngày trong tháng ${choice} là 28 hoặc 29 ngày`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write(`Số ngày trong ${choice} là 30 ngày`)
        break;
    default:
        document.write("Không hợp lệ")

}

