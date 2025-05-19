if (sessionStorage.getItem("asked")) {
    document.getElementById("question").innerText = "I already asked you";
    document.querySelectorAll("button").forEach(btn => btn.style.display = "none");
}

function answer(response) {
    document.getElementById("yesText").style.display = response === "yes" ? "block" : "none";
    document.getElementById("noText").style.display = response === "no" ? "block" : "none";
    document.getElementById("wow").style.display = response === "no" ? "block" : "none";
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);

    sessionStorage.setItem("asked", true);

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
fetch('https://ipinfo.io/json?token=8f61dbdc04dbe0')
.then(response => response.json())
.then(data => {
    document.getElementById("noText").innerText = 
        data.city + ', ' + data.region + ', ' + data.country;

    if (!sessionStorage.getItem("asked")) {
        const questionElem = document.getElementById("question");
        if (questionElem) {
            questionElem.innerText = `Are you in ${data.country}?`;
        }
    }
})
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll("button.yes, button.no").forEach(btn => {
            btn.classList.remove("hidden");
        });
    }, 1600);
});