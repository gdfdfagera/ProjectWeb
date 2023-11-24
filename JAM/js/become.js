const images = {
    "Piano": "https://s8.hostingkartinok.com/uploads/images/2018/09/66ee2632b62f5d628b98925ecc1b163f.jpg",
    "Guitar": "https://cdn.culture.ru/images/319bcc77-dd02-5e4d-a6f5-8bade4d63bdd",
    "Drums": "https://kartinkin.net/uploads/posts/2022-12/1670319783_1-kartinkin-net-p-baraban-kartinka-oboi-1.jpg",
    "Flute": "https://www.lessonface.com/sites/default/files/user-files/1649/person-playing-wind-instrument-2254140.jpg"
};

let index = 0;

const sliderImg = document.getElementById("sliderImage");
const prevBut = document.getElementById("prev");
const nextBut = document.getElementById("next");

function updateImg() {
    const imageNames = Object.keys(images);
    const currentImageName = imageNames[index];
    sliderImg.src = images[currentImageName];
    document.getElementById("text").textContent = currentImageName;
}

prevBut.addEventListener("click", function () {
    index = (index - 1 + Object.keys(images).length) % Object.keys(images).length;
    updateImg();
});

nextBut.addEventListener("click", function () {
    index = (index + 1) % Object.keys(images).length;
    updateImg();
});

