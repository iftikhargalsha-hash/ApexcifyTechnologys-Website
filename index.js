function openLightbox(src) {
    document.getElementById("lightImage").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}


function filter(type) {
    let imgs = document.querySelectorAll(".portfolio img");
    imgs.forEach(img => {
        if (type === "all" || img.classList.contains(type)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}


let slides = [
    "https://via.placeholder.com/700x400",
    "https://via.placeholder.com/700x400/222",
    "https://via.placeholder.com/700x400/777"
];
let i = 0;

function next() {
    i = (i + 1) % slides.length;
    document.getElementById("slideImg").src = slides[i];
}

function prev() {
    i = (i - 1 + slides.length) % slides.length;
    document.getElementById("slideImg").src = slides[i];
}
