// Bước 1: Xây dựng giao diện với ô "Nhập tên cầu thủ" và một nút "Thêm cầu thủ"

// Bước 2: Viết hàm xử lý thêm cầu thủ vào danh sách, lưu trữ vào localStorage
// B1: Lấy các selector tương ứng
let player = document.getElementById("inputPlayer");
// let addNewPlayer = document.getElementById("addNewPlayer");
let control = document.getElementById("addPlayer");
let listPlayer = document.getElementById("listPlayer");

// B2: Thêm sự kiện click cho nút thêm cầu thủ
addNewPlayer.addEventListener("click", function () {
    // B2.1: Thêm player vào bộ nhớ trình duyệt
    localStorage.setItem(player.value, player.value);

    // B2.2: Khởi tạo phần tử li
    let liPlayer = document.createElement("li");
    let liText = document.createTextNode(player.value);
    liPlayer.appendChild(liText);

    // B2.3: Thêm phần tử li vào danh sách đã có
    listPlayer.appendChild(liPlayer);

    // B2.4: Làm rỗng ô input sau khi thêm thành công
    player.value = "";
});
//Bước 3: Viết hàm lấy thông tin danh sách cầu thủ
// B1: Tạo hàm lấy danh sách cầu thủ
function getAllPlayer() {
    // B1.1: Duyệt danh sách cầu thủ lưu trữ tại local storage
    for (let index = 0; index < localStorage.length; index++) {
        // B1.2: Khởi tạo phần tử li
        let liPlayer = document.createElement("li");
        let liText = document.createTextNode(localStorage.key(index));
        liPlayer.appendChild(liText);

        // B1.3: Thêm phần tử li vào danh sách đã có
        listPlayer.appendChild(liPlayer);
    }
}

// B2: Hiển thị danh sách cầu thủ
getAllPlayer();

//======================Thuc hanh 2: cau thu giai nghe================================
// Bước 2: Viết hàm xóa tất cả cầu thủ khỏi danh sách
// B1: Lấy các selector tương ứng
let clr = document.getElementById("clearPlayer");

// B2: Thêm sự kiện click cho nút xóa tất cả cầu thủ
clr.addEventListener("click", function () {
    localStorage.clear();
    listPlayer.innerHTML = "";
});

// Bước 3: Viết hàm xóa cầu thủ khỏi danh sách, với 1 nút "Xóa" cạnh tên cầu thủ
// Tại Bước 2.2 - Tính năng Thêm mới cầu thủ, bổ sung logic
// B2.2: Khởi tạo phần tử li
let button = document.createElement("button");
button.innerText = "Xóa";
liPlayer.appendChild(button);

// B2.3: Thêm sự kiện xóa item
button.addEventListener("click", function () {
    // B1: Lấy ra key tương ứng
    let keyPlayer = button.previousSibling;
    // B2: Xóa phần tử khỏi localStorage
    localStorage.removeItem(localStorage.key(keyPlayer));
    // B3: Xóa khỏi giao diện
    button.parentNode.outerHTML = "";
});

// Tại Bước 1.2 - Tính năng Tạo hàm lấy danh sách cầu thủ
let button = document.createElement("button");
button.innerText = "Xóa";
liPlayer.appendChild(button);

// Thêm sự kiện xóa cho từng nút nếu đã tồn tại
let deletePlayer = document.querySelectorAll("ul#listPlayer li button");
for (let index = 0; index < deletePlayer.length; index++) {
    // B1: Thêm sự kiện cho các nút
    deletePlayer[index].addEventListener("click", function () {
        // B2: Lấy ra key tương ứng
        let keyPlayer = deletePlayer[index].previousSibling;
        // B3: Xóa phần tử khỏi localStorage
        localStorage.removeItem(localStorage.key(keyPlayer));
        // B4: Xóa khỏi giao diện
        deletePlayer[index].parentNode.outerHTML = "";
    });
}
