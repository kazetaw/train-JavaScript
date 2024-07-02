function findmaxarr() {
    let arr = [22, 19, 2, 89, 77];
        let max = Math.max(...arr);
    
    console.log("ข้อ 1 ค่าสูงสุดคือ " + max);
}

findmaxarr();


//ข้อที่2
function createSequentialArray(n) {
    return Array.from({length: n}, (_, i) => i + 1);
}
const n = 5;
const result2 = createSequentialArray(n);
console.log(`ข้อ 2 n ${n} ตัว เรียงได้: [${result2}]`);

//ข้อที่3
function generateDiamondPyramid(n) {
    for (let i = 1; i <= n; i += 2) {
        console.log(' '.repeat((n - i) / 2) + '*'.repeat(i));
    }
}
console.log('ข้อ 3')
generateDiamondPyramid(9);


//ข้อที่3

// function generateDiamondPyramid(n) {
//     // สร้างครึ่งบนของพีระมิด
//     for (let i = 1; i <= n; i++) {
//         console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
//     }
// }
// // ทดสอบฟังก์ชัน
// generateDiamondPyramid(9);