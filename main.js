/*
// làm việc với mảng phần 1
1. tostring - chuyển từ mảng chuổi
- cú pháp: Array.toString()
2. Join - hàm nối các phần tử trong mảng thành chuỗi
- cú pháp: array.join()
3. pop - xóa phần tử cuối mảng và trả về phần tử đó
- cú pháp: array.pop()
4. push - thêm phần tử cuối mảng và trả về độ dài mới của mảng
- cú pháp: array.push()
5. shift - xóa đi phần tử đầu mảng và trả về phần tử đã xóa
- cú pháp: array.shift()
6. unshift -  thêm 1 hoặc nhiều phân tử đầu mảng và trả về độ dài mới của mảng đó
- cú pháp: array.unshift()
7. splicing - cắt, xóa, chèn phần tử vào mảng
- cú pháp: array.splice(điểm đặt con chuột, số phần tử muốn xóa, phần tử muốn chèn)
8. concat -  nối 2 mảng với nhau
- cú pháp: array.concat(mảng nối)
9.slicing - cắt 1 vài phần tử của mảng
- cú pháp: array.slice(vị trí bắt đầu, vị trí kết thúc)

// làm việc với mảng phần 2 ( phần này cần chuyền hàm vào trong đối số)

10. foreach - duyệt qua từng phần tử của mảng
- cú pháp: array.foreach(function(course) {
    console.log(course)
})
11. every - kiểm tra tất cả các phẩn tử của mảng phải thỏa mãn điều kiện nào đó 
(trả về true hoặc false)
- cú pháp: var biến = array.every(function(course, index) {
    return course.coin === 0
})
console.log(biến)

12. some - kiểm tra chỉ cần 1 điều kiện đúng trả về true
- cú pháp: var biến =  array.some(function(course) {
    return course.coin === 0
})
console.log(biến)

13. find - dùng tìm kiếm ký tự hoặc phần tử có trong mảng không 
(nếu có 2 phần tử giống nhau thì chỉ trả về duy nhất phần tử đầu tiên tìm được)
-cú pháp: var biến = array.find(function(course) {
    return course.name === 'hungbiin'
})
console.log(biến)

14. filter - dùng tìm kiếm phần tử và trả về tất cả các phần tử tìm được
- cú pháp: var biến = array.filter(function(course) {
    return course.name === 'hungbiin'
})
console.log(biến)

15. map - dùng để chỉnh sửa, thay đổi phần tử của mảng
- cú pháp: var newArray =  array.map(function(course) {
    return course (return cái gì thì mảng mới trả về cái đó)
})
console.log(newArray)

16. reduce - dùng khi muốn nhận về 1 giá trị duy nhất sau khi tình toán và sử lý các phần tử trong mảng
- cú pháp: var totalCoin = array.reduce(function(course, total) {
    return  total + course.coin
},0) 0 là giá trị khởi tạo
console.log(totalCoin)
*/

// var courses = [
//     {
//         name: 'hung',
//         coin: 450
//     },
//     {
//         name: 'linh',
//         coin: 400
//     },
//     {
//         name: 'biin',
//         coin: 600
//     }
// ]

// var bigcoin =  courses.filter(function(course) {
//     return course.coin > 400
// })
// console.log(bigcoin)

// CallBack

var myinfor = [
    {
        name: 'hung',
        coin: 500
    },
    {
        name: 'linh',
        coin: 300
    }
]
function gettotal(myinfor) {

    for (var key of myinfor) {
        var sum = 0;
        return sum += myinfor[key].coin
    }
    // return sum
}
console.log(sum)