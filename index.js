//array + forloop


let  safetys = ['a', 'b', 'c', 'd', 'e', 'f', 'g']; //สร้างarrayที่ชื่อsafety
//ให้ i = 0 ให้ i +1 ไปเรื่อยๆ ถ้า i มีค่าน้อยกว่าความกว้างของarrayให้้หยุดloop
for(let i = 0; i < safetys.length; i++) {
    console.log(safetys[i])
}



const numbers = [65, 44, 12, 4];
//map คือการดึงข้อมูลจากarrayทีละตัว
const newArr = numbers.map(Mamamhusub) //เอาแต่ละตัวที่อยู่ให้nummbersมาmapโดยส่งให้ฟังค์ชั่น Mamamhusub

function Mamamhusub(number) {
    //ให้เอาข้อมูลที่ได้มาจากการmapมาคูณ10ทีละตัว
  return number * 10;
}
console.log(newArr)



// array sort
const months = ['ซาเปา', 'เซฟ', 'จี้', 'คาบิกอน'];
months.sort();
console.log(months);
//output : ["คาบิกอน", "จี้", "เซฟ", "ซาเปา"]



//array unshift (เอาไปแทรกข้างหน้า)
const box = ["Car", "Mama", "Monkey", "Banana", "Apple"];
box.unshift("Orange", "Pineapple", "and",  "Apple pen");
//output : ["Orange", "Pineapple", "and", "Apple pen", "Car", "Mama", "Monkey", "Banana", "Apple"]



// ArrayName.slice
//               1,-5    2,-4   3,-3   4,-2   5,-1  
const animals = ['safe', 'sui', 'sun', 'mom', 'papa'];

console.log(animals.slice(2));
//output : ["sun", "mom", "papa"] (เอา2ตัวหน้าออก)

console.log(animals.slice(2, 4));
//output : ["sun", "mom"] (ตัด2ตัวหนน้าออกและเอาตัวที่4)

console.log(animals.slice(1, 5));
//output : ["sui", "sun", "mom", "papa"] (เอาทุกตัวโดยตัดตัวแรก)

console.log(animals.slice(-2));
//output : ["mom", "papa"] (เอา2ตัวหลัง)

console.log(animals.slice(2, -1));
//output : ["sun", "mom"] (เอา2ตัวหน้าและเอาตัวท้ายสุดจากarrayออก)

// (เพื่อไรไม่รู้แต่แยากเขียน)
console.log(animals.slice());
//output : ["safe", "sui", "sun", "mom", "papa"] (เอามาทุกตัว)

//array join (เอาarrayทั้งก้อนมารวมกัน)
const elements = ['Pineapple', 'And', 'Applepen'];

console.log(elements.join());
// expected output: "Pineapple,And,Applepen"

console.log(elements.join(''));
// expected output: "PineappleAndApplepen"

console.log(elements.join('-'));
// expected output: "Pineapple-And-Applepen"



//array1.includes เช็คว่าในก้อนarrayมีคำหรือค่านั้นอยู่หรือป่าว
const Banana = [1, 2, 3];

console.log(array1.includes(2));
//output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
//output: true

console.log(pets.includes('money'));
//output: false