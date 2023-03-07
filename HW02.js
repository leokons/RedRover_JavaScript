function handleButtonClick() {
    let month = prompt("Enter your vacation month:");
    if (month == "July" || month == "August") {
        alert("Approved");
    } else {
        alert("Denied");
    }
}

//1
// btn = document.createElement('BUTTON');
// btn.id = 'id1';
// btn.onclick=handleButtonClick;
// btn.textContent='Vacation';
// document.body.appendChild(btn);

// //2
// let b = document.getElementById("newButton");
// b.addEventListener('click', handleButtonClick);

//улитка
let position = 0;
let dayLength = 3;
let nightLength = 2;
let wallLength = 5;
let days;

function daysDuration(position, dayLength, nightLength, wallLength) {
    let days = 0;

    while (position < wallLength) {
        days++;
        position += dayLength;
        if (position < wallLength) {
            position -= nightLength;
        }
    }
    return days;
}

days = daysDuration(position, dayLength, nightLength, wallLength);
let unitHeight;
let unitDays;

if (wallLength % 100 >= 11 && wallLength % 100 <= 19) {
    unitHeight = "метров";
} else if (wallLength == 1 || wallLength % 10 == 1) {
    unitHeight = "метр";
} else if (wallLength % 10 >= 2 && wallLength % 10 <= 4) {
    unitHeight = "метра";
} else if (wallLength % 10 >= 5 && wallLength % 10 <= 9 || wallLength % 10 <= 0) {
    unitHeight = "метров";
}

if (days % 100 >= 11 && days % 100 <= 19) {
    unitDays = "дней";
} else if (days == 1 || days % 10 == 1) {
    unitDays = "день";
} else if (days % 10 >= 2 && days % 10 <= 4) {
    unitDays = "дня";
} else if (days % 10 >= 5 && days % 10 <= 9 || days % 10 <= 0) {
    unitDays = "дней";
}

console.log(`Улитка заползет на стену высотой ${wallLength} ${unitHeight} за ${days} ${unitDays}.`);
