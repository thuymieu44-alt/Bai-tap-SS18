let products = [
    {id: 1, name: "Milk", count: 100 },
    {id: 2, name: "Orange", count: 100 },
    {id: 3, name: "Butter", count: 100 },
];
console.log(products);

// Thêm đối tượng có các thuộc tính tương tự (C)
products.push ({
    id: 4,
    name:"Thuy",
    count: 100,
});
console.log(products);

// Xóa đối tượng có id=2 (D)
let del = products.splice(1, 1);
console.log(products);

// Truy vấn đối tượng có id=3, sau đó cập nhật count=0 
for ( i = 0; i < products.length; i++ ) {
    if (products[i].id ===3 )
        products[i].count = 0;
    console.log(products);
}

// cho từ khóa "Butter". Kiểm tra có hay không, nếu có thì in toàn bộ thông tin, không có thì thông báo "Không có dữ liệu bạn tìm kiếm"
let found = false;
for (let i = 0; i < products.length; i++) {
    if (products[i].name === "Butter") {
        console.log(products[i]);
        found = true;
        break;
    }
}
if (!found) {
    console.log("Không có dữ liệu bạn tìm kiếm");
}