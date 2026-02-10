document.getElementById("closed-envelope-container-id").onclick = function() {
    const closed = this;
    const opened = document.getElementById("opened-envelope-container-id");
    const main = document.getElementById("main-container-id");
    const confetti = document.getElementById("heart-confetti");

    closed.style.display = "none";

    opened.style.display = "flex";
    opened.style.opacity = "1";
    opened.style.pointerEvents = "auto";

    confetti.style.display = "block";
    confetti.innerHTML = "";

    const rect = opened.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = centerX + "px";
        heart.style.top = centerY + "px";
        const dx = (Math.random() - 0.5) * 600 + "px";
        const dy = (Math.random() - 0.5) * 600 + "px"; 
        heart.style.setProperty("--dx", dx);
        heart.style.setProperty("--dy", dy);
        heart.style.animation = (1 + Math.random()) + "s ease-out forwards explode";
        confetti.appendChild(heart);
    }

    setTimeout(() => {
        confetti.innerHTML = "";
        confetti.style.display = "none";
    }, 2000);

    setTimeout(() => {
        opened.style.opacity = "0";
        opened.style.pointerEvents = "none";

        setTimeout(() => {
            opened.style.display = "none";
            main.style.display = "flex";
        }, 1000);
    }, 2000);
};

const container = document.getElementById("main-container-id");
const buttons = [document.getElementById("no-id")];

buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
        const buttonWidth = btn.offsetWidth;
        const buttonHeight = btn.offsetHeight;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
        const randomLeft = Math.random() * (containerWidth - buttonWidth);
        const randomTop = Math.random() * (containerHeight - buttonHeight);
        btn.style.position = "absolute";
        btn.style.left = randomLeft + "px";
        btn.style.top = randomTop + "px";
    });
});

const heartContainer = document.getElementById("heart-rain");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");

    heart.style.left = Math.random() * 100 + "vw";

    const size = Math.random() * 15 + 10;
    heart.style.width = size + "px";
    heart.style.height = size + "px";


    const duration = Math.random() * 3 + 3;
    heart.style.animationDuration = duration + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);


document.getElementById(`next-button-id`).onclick = function(){
    document.getElementById(`first-paragraph-id`).style.display = "none";
    document.getElementById(`second-paragraph-container-id`).style.display = "block";
    document.getElementById(`next-button-id`).style.display = "none"; 
}

document.getElementById(`back-button-id`).onclick = function(){
    document.getElementById(`first-paragraph-id`).style.display = "block";
    document.getElementById(`second-paragraph-container-id`).style.display = "none";
    document.getElementById(`next-button-id`).style.display = "block"; 
}

document.getElementById(`second-next-button-id`).onclick = function(){
    document.getElementById(`second-paragraph-container-id`).style.display = "none";
    document.getElementById(`third-paragraph-container-id`).style.display = "block";
    document.getElementById(`second-image-id`).style.display = "block";
    document.getElementById(`first-image-id`).style.display = "none";
    document.getElementById(`say-yes-id`).style.display = "block";
}

document.getElementById(`second-back-button-id`).onclick = function(){
    document.getElementById(`second-paragraph-container-id`).style.display = "block";
    document.getElementById(`third-paragraph-container-id`).style.display = "none";
    document.getElementById(`second-image-id`).style.display = "none";
    document.getElementById(`first-image-id`).style.display = "block";
    document.getElementById(`say-yes-id`).style.display = "none";
}

document.getElementById(`yes-id`).onclick = function(){
    document.getElementById(`first-container-id`).style.display = "none";
    document.getElementById(`final-container-id`).style.display = "block";
}

document.getElementById("download-flower-btn").onclick = function() {
    const image = document.getElementById("flower-img");

    const link = document.createElement("a");
    link.href = image.src;
    link.download = "transparent_purple_flower.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const backBtn = document.getElementById("back-button-final");
    backBtn.style.display = "block";
};


document.getElementById("back-button-final").onclick = function() {
    document.getElementById("first-container-id").style.display = "block";
    document.getElementById("final-container-id").style.display = "none";
};


