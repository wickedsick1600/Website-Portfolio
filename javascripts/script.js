const gradPic = document.getElementById("gradpic");
const gradPic1 = document.getElementById("gradpic1");
const gradPic2 = document.getElementById("gradpic2");

gradPic.addEventListener("mouseover", () => {
    gradPic1.style.opacity = '0.1';
    gradPic2.style.opacity = '0.1';
});
gradPic.addEventListener("mouseout", () => {
    gradPic1.style.opacity = '1';
    gradPic2.style.opacity = '1';
});
gradPic1.addEventListener("mouseover", () => {
    gradPic.style.opacity = '0.1';
    gradPic2.style.opacity = '0.1';
});
gradPic1.addEventListener("mouseout", () => {
    gradPic.style.opacity = '1';
    gradPic2.style.opacity = '1';
});
gradPic2.addEventListener("mouseover", () => {
    gradPic1.style.opacity = '0.1';
    gradPic.style.opacity = '0.1';
});
gradPic2.addEventListener("mouseout", () => {
    gradPic1.style.opacity = '1';
    gradPic.style.opacity = '1';
});

function copy (value){
    navigator.clipboard.writeText(value);
}

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}