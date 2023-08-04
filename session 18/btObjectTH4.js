
// Bài 4: Tạo dữ liệu để có thể in ra nội dung dưới đây:
// Cho người dùng nhập vào 5 chữ cái C / R / U / D / E
// C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
// R – In ra toàn bộ các khóa học theo mẫu trên
// U – Hỏi người dùng vị trí update khóa học.Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới.Update xong in lại như trên
// D – Hỏi người dùng vị trị của khóa học muốn xóa.Tiến hành xóa và in ra như trên
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”


// 1. HTML Complete: false
// 2. CSS Complete: false
// 3. Basic Complete: false
// 4. Node Complete: false
// 5. Git Complete: false

// {id, ten, hoanThanh}
let idTuTang = 1; // biến toàn cục giúp tự tăng id
class KhoaHoc {
    id = idTuTang++; // gán id bằng giá trị biến toàn cục và tăng giá trị toàn cục lên 1 để
    // gán cho khóa học sinh sau
    hoanThanh = false // mặc định lúc mới tạo khóa học thì trạng thái hoàn thành là chưa(false)
    constructor(ten) { // truyền vào tên của khóa học
        this.ten = ten
    }
}

let kh1 = new KhoaHoc("HTML") // {id: 1, ten: "HTML", hoanThanh: false}   idTuTang: 2
let kh2 = new KhoaHoc("CSS") // {id: 2, ten: "CSS", hoanThanh: false}   idTuTang: 3
let kh3 = new KhoaHoc("Basic") // ...
let kh4 = new KhoaHoc("Node") // ... 
let kh5 = new KhoaHoc("Git") // ...

let mangKhoaHoc = [kh1, kh2, kh3, kh4, kh5] // mảng lưu các khóa học để làm việc

let giaTriNhap;
while(true) {
    // Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
    giaTriNhap = prompt("Nhap C/R/U/D/E")

    // C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành. 
    if(giaTriNhap == "C") {
        let tenKhoaHocMoi = prompt("Nhap ten khoa hoc moi"); // nhập tên khóa mới để sinh ra khóa
        // học mới vì id đã tự tăng còn hoanThanh lúc mới đầu đã mặc định là false
        let khoaHocMoi = new KhoaHoc(tenKhoaHocMoi)

        // Sau đó cập nhật lại mảng dữ liệu
        mangKhoaHoc.push(khoaHocMoi)
        // và in ra giống như trên
        console.log(mangKhoaHoc);
    } 
    else if (giaTriNhap == "R") { // R – In ra toàn bộ các khóa học theo mẫu trên
        console.log(mangKhoaHoc);
    }
    // U – Hỏi người dùng vị trí update khóa học. 
    // Nếu tồn tại thì cho người dùng nhập vào tên muốn update và trạng thái mới.
    // Update xong in lại như trên
    else if (giaTriNhap == "U") {
        let viTriSuaKhoaHoc = Number(prompt("Nhap vi tri khoa hoc muon sua"))

        if (viTriSuaKhoaHoc < 0 || viTriSuaKhoaHoc > mangKhoaHoc.length - 1) {
            console.log("Khong co vi tri day trong mang khoa hoc");
        } else {
            let tenMoi = prompt("Nhap ten moi cho khoa hoc")
            let trangThaiHoanThanhMoi; // true 1 - false 0
            // update
            mangKhoaHoc[viTriSuaKhoaHoc].ten = tenMoi

            // bắt người dùng nhập đúng các giá trị 0(false) - 1(true)
            do {
                trangThaiHoanThanhMoi = prompt("Nhap trang thai moi cho khoa hoc 0 / 1")
            } while(trangThaiHoanThanhMoi != 0 && trangThaiHoanThanhMoi != 1)
            // gán lại giá trị của hoanThanh bằng giá trị (0/1) mà người dùng nhập
if (trangThaiHoanThanhMoi) {
                mangKhoaHoc[viTriSuaKhoaHoc].hoanThanh = true
            } else {
                mangKhoaHoc[viTriSuaKhoaHoc].hoanThanh = false
            }
            // in lai mangKhoaHoc
            console.log(mangKhoaHoc);
        }
    }
    // D – Hỏi người dùng vị trị của khóa học muốn xóa. Tiến hành xóa và in ra như trên
    else if (giaTriNhap == "D") {
        let viTriMuonXoa = prompt("Nhap vi tri khoa hoc muon xoa")
        
        // vị trí muốn xóa phải hợp lệ với số lượng mảng
        if (viTriMuonXoa < 0 || viTriMuonXoa > mangKhoaHoc.length - 1) {
            console.log("Vi tri nay khong ton tai")
        } else {
            // câu lệnh splice để thực hiện xóa khi truyền đủ 2 tham số
            // tham số thứ 1 là vị trí bắt đầu xóa
            // tham số thứ 2 là số lượng phần tử muốn xóa
            mangKhoaHoc.splice(viTriMuonXoa, 1)
            console.log(mangKhoaHoc)
        }
    }
    // E – Biến chương trình thành vòng lặp vĩnh cữu và khi người dùng nhập vào E
    // thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
    else if(giaTriNhap == "E" || giaTriNhap == undefined) {
        console.log("Cam on");
        break;
    }
}










