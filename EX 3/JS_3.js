let myList = document.getElementById("myList");
// Read
function readMyList(){
    let items = myList.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
        console.log(items[i].innerText);
    }
}
// Create / Delete

function newE() {
  let inputValue = document.getElementById("myInput").value.trim();
  if (inputValue === '') {
    alert("Vui lòng nhập danh mục mới");
    return;
  }else {
    let items = myList.getElementsByTagName("li");
    let found = false;
    for (let i = 0; i < items.length; i++){
      if (inputValue === items[i].innerText) {
        items[i].remove();
        //console.log('Đã xóa');
        found = true;
        break;
      }
    }
    if (!found) {
      let li = document.createElement("li");
      let t = document.createTextNode(inputValue);
      li.appendChild(t);
      document.getElementById("myList").appendChild(li);
      document.getElementById("myInput").value = "";
    //console.log('Đã thêm');
    }
  }
  readMyList();
}

// Update setAttribute
myList.addEventListener('click', function(e){
    if ( e.target.tagName === 'LI');
        e.target.classList.toggle('checked');
});