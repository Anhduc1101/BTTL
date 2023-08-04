// Bài 2: Tạo một class Dog có những thuộc tính:
// Tạo class Cat có những thuộc tính sau:
class Cat {
    // Tên và tốc dộ di chuyển
    constructor(name, speed) {
        this.name = name;
        this.speed = this.speed;
    }
}
class Dog {
    // Tên và tốc độ di chuyển
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    // Có khả năng thực hiện sủa
    sound() {
        console.log("gâu gâu");
    }
    // Có khả năng bắt được mèo nếu tốc độ của chó lớn hơn
    catch(cat) {
        if (this.speed > cat.speed) {
            console.log("Bắt đc");
        } else {
            console.log("chịu");
        }
    }
}
let dog = new Dog("a", 20);
let cat = new Cat("b", 25);
dog.sound();
dog.catch(cat);