// Bài 1: Tạo một đối tượng chứa thông tin về một người bao gồm tên, tuổi, địa chỉ và số điện thoại.
// Sau đó truy xuất các thuộc tính của đối tượng trên
let Person = {
    name: "Tran Chan",
    age: 35,
    address: "china",
    tel: "0988-xxx-xxx"
}
console.log(Person);
console.log(Person.name);
console.log(Person["age"]);
console.log(Person["address"]);
console.log(Person["tel"]);


// Bài 2: Viết chương trình tạo đối tượng student có cặp key và value tương ứng như dưới đây,
// sau đó khởi tạo đối tượng newStudent có các thuộc tính tương tự(value tự điền).
// Sau đó tạo mảng “students” để chứa chúng.
// Cuối cùng truy xuất các thuộc tính của đối tượng “newStudent” sau khi thêm vào mảng “students”

class student {
    constructor(id, name, gender, age, mark) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.mark = mark;

    }
}
let Student = new student("1", "Nguyễn Văn A", "nam", "20", 8);
let newStudent = new student("2", "Nguyễn Văn B", "nam", "21", 9);
let students = [Student, newStudent]
console.log(students[1]["mark"]);


// Bài 3: Với dữ liệu từ bài 2 hãy tìm ra học sinh có điểm trung bình cao hơn và in ra toàn bộ thông tin của học sinh đó
if (students[0].mark > students[1].mark) {
    console.log(students[0]);
} else {
    console.log(students[1]);
}


let max = 0;
let index;
for (i = 0; i < students.length; i++) {
    if (students[i].mark > max) {
        max = students[i].mark;
        index = i;
    }
}

console.log(max, students[index]);


// Bài 4: Tạo thêm đối tượng “newStudent2” với các thuộc tính tương tự như đối tượng “newStudent” với value bất kỳ.
// Sau đó thêm vào mảng “students” (ở bài 2).
// Tính điểm trung bình của các học sinh trong mảng students trên.Nếu trên 7.5 thì đánh giá lớp khá,
// từ 5 đến 7.5 thì đánh giá lớp trung bình, dưới 5 là lớp yếu

let newStudent2 = new student("3", "Nguyễn Văn C", "nam", "25", 10);
students.push(newStudent2);
let avr = 0;
let sum = 0;
for (i = 0; i < students.length; i++) {
    sum += students[i].mark;
}
avr = sum / students.length;
if (avr > 7.5) {
    console.log("lop kha");
} else if (avr > 5) {
    console.log("lop trung binh");
} else {
    console.log("lop yeu");
}
