// 1. Cho danh sách những đồ đạc ở phía dưới

// 1.1 Trong JS, tạo một biến có tên là items để lưu trữ toàn bộ data ở phía trên, log ra trong màn hình console biến đó
let items = ["Backpack", "Miband watch", "Ring"]
console.log(items);

// 1.2. Trong file HTML, tạo một thẻ <ul> với một vài items test có sẵn.
// {/* <ul>
//     <li></li>
//     <li></li>
// </ul> */}

// 1.3. Lấy thẻ list đó ra
let list = document.getElementById("list");
console.log(list);

// 1.4. Lấy toàn bộ data có trong items, mỗi item là một thẻ <li>
function veListItems(items) {
    for (i = 0; i < items.length; i++) {

        // y nghia: insertAdjacentHTML la ham cho phep ghi them HTML
        // beforeend: ghi vao trong the cua cha
        // `<li>${i}</li>`: the con muon ghi vao
        list.insertAdjacentHTML("beforeend", `<li>${items[i]} <button onclick="xoa(${i})">Remove</button></li>`);
    }
}
veListItems(items);


// Xóa các items test ở trong HTML
list.children[0].remove();
list.children[0].remove();


// 1.6. Lấy ra thẻ ‘New item’ input và thẻ ‘Add’ button
let inputText = document.getElementById("input_text");
let btnAdd = document.getElementById("btnAdd")
console.log(inputText);
console.log(btnAdd);

//1.7. Bắt sự kiện click của ‘Add‘ button
btnAdd.addEventListener("click", () => {
    // 1.8. Khi sự kiện click của ‘Add’ button được thực hiện, lấy ra value có trong ‘New item’ input
    console.log(inputText.value);

    // 1.9.Khi sự kiện ‘Add’ button được thực thi, thêm value mới của ‘New item’ input vào mảng items
    items.push(inputText.value);
   
    // 1.10.Cập nhật UI(HTML) để đồng nhất với mảng items
    list.innerHTML = ""
    veListItems(items);
    // list.insertAdjacentHTML("beforeend", `<li>${items[items.length - 1]} <button onclick="xoa(${items.length - 1})">Remove</button></li>`);

    //1.11. Reset lại input sau khi thêm phần tử mới
    inputText.value = "";
});

// 1.12.Thêm nút remove button cho mỗi item(nút xoá) <button>Remove</button>

// 1.13. Gắn sự kiện xoá cho mỗi ‘remove’ ‘buttons’ <button onclick="xoa()">Remove</button></li>

// 1.14. Mỗi lần click vào ‘remove’ button, xác định chỉ số (index) của item được click : ${i} -  ${items.length - 1}
function xoa(vitri) {
    items.splice(vitri, 1); //xoa trong mang items
    list.innerHTML = "";
    veListItems(items);
    console.log(items);
}