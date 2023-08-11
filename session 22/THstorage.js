
// let todos = JSON.parse(localStorage.getItem("todos")) || []

// let arr = [{ id: 1, name: "learn javascript" }, { id: 2, name: " javascript" }];
// localStorage.setItem("todos", JSON.stringify(arr));
let box = JSON.parse(localStorage.getItem("todos"));
// b1 : ve giao dien
function showList() {
    let str = "";
    for (i = 0; i < box.length; i++) {
        let element = box[i];
        str += ` <div class="midCircle">
                <div>
                        <input type="radio" id="radio" name="radio" onclick>
                        <span>${element.name}</span>
                    </div>
                    <a onclick="deleteId(${element.id})"><i class="fa-solid fa-circle-xmark"></i></a>
                </div>
            </div>`
    }
    document.getElementById("list").innerHTML = str;
}
showList();

// b2: chuc nang add
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault()
    function add() {
    
}
    let newName = document.getElementById("inputAdd").value;
    let newID = getNewId();
    let newArr = {
        id: newID,
        name: newName
    }
    box.push(newArr);
    localStorage.setItem("todos", JSON.stringify(box));
    document.getElementById("inputAdd").value = "";
    showList();
})


//id tu tang
function getNewId() {
    let idMax = 0;
    for (i = 0; i < box.length; i++) {
        let element = box[i];
        if (idMax < element.id) {
            idMax = element.id;
        }
    }
    return ++idMax;
}

// b3: chuc nang xoa
function deleteId(idDelete) {
    let indexDelete = box.findIndex(e => e.id == idDelete);
    console.log(indexDelete);
    box.splice(indexDelete, 1);
    showList();
}