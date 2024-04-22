function updateClock(){
    
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0); 
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem} `;
    document.getElementById("clock").textContent = timeString;
}

const btn = document.getElementById("btn");

function playMusic(){
    let audio = new Audio("images/not.mp3");
    audio.play();
}
btn.addEventListener("click", playMusic);

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

updateClock();
setInterval(updateClock, 1000);