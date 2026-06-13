let students = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        gender: "nam",
        age: 20,
        mark: 8
    }
];

let newId = Date.now();
let newName = prompt('Mời nhập tên:');
let newGender = prompt('Mời nhập giới tính:');
let newAge = prompt('Mời nhập tuổi:');
let newMark = prompt('Mời nhập điểm:');
let newStudent;
if(newName ==="" || newGender ==="" || newAge==="" || newMark===""){
        console.log("Yêu cầu nhập đầy đủ thông tin");
    }else{
 newStudent = {
    id: newId,
    name: newName,
    gender: newGender,
    age: Number(newAge),
    mark: Number(newMark),
}
students.push(newStudent);
};

function renderStudents() {
    let tBody = document.getElementById("table-body");
    tBody.innerHTML = '';
    students.forEach((element) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.gender}</td>
        <td>${element.age}</td>
        <td>${element.mark}</td>`;

        tBody.appendChild(tr);
        // console.log(tBody.textContent);
    });
}
renderStudents();
document.getElementsByTagName("td").value =""