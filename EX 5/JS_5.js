let students = [
    {
        id: "1",
        name: "Thủy",
        age: "18",
        class: "A1",
    },
]

function renderStudent() {
    let tBody = document.getElementById("table-body")
    tBody.innerHTML = ''
    students.forEach((element) => {
        let tr = document.createElement('tr') 
        tr.innerHTML = `<td>${element.name}</td>
            <td>${element.age}</td>
            <td>${element.class}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-edit">Sửa</button>
                <button class="btn-delete">Xóa</button>
              </div>
            </td>`
        tBody.appendChild(tr)
        // console.log(tBody.textContent);
    });
    attachDeleteEvent();
}

function attachDeleteEvent() {
        let btnDel = document.getElementsByClassName("btn-delete")
        for (let btn of btnDel ) {
            btn.addEventListener("click", function(e) {
                e.preventDefault()
                let tr = this.parentNode.parentNode.parentNode;
                tr.remove();
                console.log("Đã xóa")
             });
        }
    }
        renderStudent();

let btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener("click", function (e) {
    e.preventDefault();
    let inputName = document.getElementById("name").value;
    let inputAge = document.getElementById("age").value;
    let inputClass = document.getElementById("class").value;
    if (inputName === "" || inputAge === "" || inputClass === "") {
        console.log("Yêu cầu nhập đầy đủ thông tin");
        return;
    } else {
        let newStudent = {
            id: Date.now(),
            name: inputName,
            age: inputAge,
            class: inputClass
        };

        students.push(newStudent);
        renderStudent();
        // console.log("Đã thêm")
    };
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("class").value = "";
});
    








