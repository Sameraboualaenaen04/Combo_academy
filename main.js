const modalSignInBtn = document.getElementById("signInBtn");
const inputField = document.querySelector("input");
const bodyPage = document.querySelector("body");
const faildAlert = document.getElementById("faild-alert");
const sucessAlert = document.getElementById("success-alert");
const navLinks1 = document.querySelector("#navA1");
const navLinks2= document.querySelector("#navA2");
const navLinks3 = document.querySelector("#navA3");
const navSignBtn = document.getElementById("signBtn");
const dsaNavBtn = document.getElementById("dsa-button");
const dsaNavContent = document.getElementById("dsa-contnet");

function getInfo(){
    const userName = document.getElementById("name").value;
    const userAge = document.getElementById("age").value;
    const userEmail = document.getElementById("email").value;
    let user ={
        'name': userName,
        'age': userAge,
        'email': userEmail
    }
    if(userName == "" || userAge == "" || userEmail == "") {
        faildAlert.style.display= 'block';
    }
    else if(userName !== " " && userAge !== " " && userEmail !== " "){
        localStorage.setItem("UserInfoRegistration", JSON.stringify(user));
        sucessAlert.style.display = 'block';
    }
}
// updateBody();

function getInfoForEnroll(){
    const enrollName = document.getElementById("name1").value;
    const enrollCountry = document.getElementById("country1").value;
    const enrollSituation = document.getElementById("selectSituation");
    const enrollEmail = document.getElementById("email1").value;
    const enrollCv = document.getElementById("cv1").value;
    if (enrollName.value == " " || enrollCountry.value == " " || enrollEmail == " ") {
        alert("faild enroll try again");
    } else if(enrollName.value !== " " && enrollCountry.value !== " " && enrollEmail !== " ") {
        alert("success enroll thank you");
    }
}

function updateBody(){
    console.log("Checkbox checked:", inputField.checked);
    if(inputField.checked){
       bodyPage.style.background = "black";
       navLinks1.style.color = "white";
       navLinks1.style.background = "#5fa771";
       navLinks2.style.color = "white";
       navLinks2.style.background = "#5fa771";
       navLinks3.style.color = "white";
       navLinks3.style.background = "#5fa771";
       navSignBtn.style.background = "#5fa771";
       dsaNavBtn.style.color = "white";
       dsaNavContent.style.color = "black";
    }
    else{
        bodyPage.style.background = "white";
        navLinks1.style.color = "#5fa771";
        navLinks1.style.background = "white";
        navLinks2.style.color = "#5fa771";
        navLinks2.style.background = "white";
        navLinks3.style.color = "#5fa771";
        navLinks3.style.background = "white";
        navSignBtn.style.background = "black";
        dsaNavBtn.style.color = "white";
        dsaNavContent.style.color = "black";
    }
}

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputField.checked));
}

inputField.checked = JSON.parse(localStorage.getItem("mode"));

inputField.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
})

inputField.checked = JSON.parse(localStorage.getItem("mode"));

//Feed back
document.addEventListener("DOMContentLoaded", () => {
    const starsEl = document.querySelectorAll(".rate");
    const emojisEl = document.querySelectorAll(".emoji");
    const reviewMessage = document.getElementById("reviewMessage");

    // Initialize with 0 rating
    updateRating(0);

    starsEl.forEach((starEl, index) => {
        starEl.addEventListener("click", () => {
            updateRating(index);
        });
    });

    function updateRating(index) {
        starsEl.forEach((starEl, idx) => {
            if (idx < index + 1) {
                starEl.classList.add("active");
            } else {
                starEl.classList.remove("active");
            }
        });

        emojisEl.forEach((emojiEl, idx) => {
            emojiEl.classList.remove("active");
            if (idx === index) {
                emojiEl.classList.add("active");
                // reviewMessage.textContent = getReviewMessage(index);
            }
    });
}
});

//search functionality
const availableKeyWords = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js']; // Example keywords
const searchInput = document.getElementById('searchInput');
const resultBox = document.querySelector('.result-Box');

document.getElementById('searchButton').addEventListener('click', search);

function search() {
    const input = searchInput.value.toLowerCase();
    const result = availableKeyWords.filter(keyword => keyword.toLowerCase().includes(input));
    let url;
    switch (input) {
        case 'stacks':
            url = './courses/stack.html';
            break;
        case 'python':
            url = './courses/pythonsyntax.html';
            break;
        case 'heap':
            url = './courses/heaps.html';
            break;
        case 'c#':
            url = './courses/c#syntax.html';
            break;
        case 'java script':
            url = './courses/javascript.html';
            break;
        case 'hash':
            url = './courses/hash.html';
            break;
        case 'linked list':
            url = './courses/linkedlist.html';
            break;
        case 'hash':
            url = './courses/hash.html';
            break;
        case 'hash':
            url = './courses/hash.html';
            break;
        default:
            alert('Course not found! Please try another search term.');
            return;
    }
    window.location.href = url;
};
