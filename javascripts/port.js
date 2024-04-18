const projectText = document.getElementById("projectText");
const websitePortfolio = document.getElementById("websitePortfolio");
const password = document.getElementById("password");
const weather = document.getElementById("weatherApp");
const scoring = document.getElementById("scoring");
const calculator = document.getElementById("calculator");
const clock = document.getElementById("clock");


websitePortfolio.addEventListener("mouseover", () => {
    projectText.textContent = 'WEBSITE PORTFOLIO (THIS WEBSITE)';
})

password.addEventListener("mouseover", () => {
    projectText.textContent = 'RANDOM PASSWORD GENERATOR';
})

weather.addEventListener("mouseover", () => {
    projectText.textContent = 'WEATHER PROGRAM';
})

scoring.addEventListener("mouseover", () => {
    projectText.textContent = 'SCORING PROGRAM';
})

calculator.addEventListener("mouseover", () => {
    projectText.textContent = 'CALCULATOR';
})

clock.addEventListener("mouseover", () => {
    projectText.textContent = 'DIGITAL CLOCK';
})

websitePortfolio.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

password.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

weather.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

scoring.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

calculator.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

clock.addEventListener("mouseout", () => {
    projectText.textContent = 'PROJECTS';
})

