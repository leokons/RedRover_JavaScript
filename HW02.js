function handleButtonClick() {
    let month = prompt("Enter your vacation month:");
    if (month == "July" || month == "August") {
        alert("Approved");
    } else {
        alert("Denied");
    }
}

//1
btn = document.createElement('BUTTON');
btn.id = 'id1';
btn.onclick=handleButtonClick;
btn.textContent='Vacation';
document.body.appendChild(btn);

//2
let b = document.getElementById("newButton");
b.addEventListener('click', handleButtonClick);
