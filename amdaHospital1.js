new Swiper(".wrapper", {
    loop: true,
    spaceBetween: 30,
    // Autoplay
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // Pagination bullets
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// patient story slider 
const data = [
    {
        title: "Expert Hands Heal",
        desc: "The Neurosurgery Team at Nepal Mediciti successfully treated a patient with serious head injuries in an accident.",
        img: "https://focus.independent.ie/thumbor/0SwwJrLMooZvi8QpspX4OoL6XkY=/0x0:6000x3999/960x640/prod-mh-ireland/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea/ad65c6f4-da35-4f8b-80e4-7a27e334fac0/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea.jpg"
    },
    {
        title: "Grow Back Stronger",
        desc: "Keshav Bahadur Barlami had heart artery problems for 7 years, operated at Nepal Mediciti.",
        img: "https://focus.independent.ie/thumbor/0SwwJrLMooZvi8QpspX4OoL6XkY=/0x0:6000x3999/960x640/prod-mh-ireland/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea/ad65c6f4-da35-4f8b-80e4-7a27e334fac0/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea.jpg"
    },
    {
        title: "Healing Up",
        desc: "A one-day-old baby was treated for Diaphragmatic Hernia. Father expressed joy and gratitude.",
        img: "https://focus.independent.ie/thumbor/0SwwJrLMooZvi8QpspX4OoL6XkY=/0x0:6000x3999/960x640/prod-mh-ireland/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea/ad65c6f4-da35-4f8b-80e4-7a27e334fac0/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea.jpg"
    },
    {
        title: "Cancer Survivor",
        desc: "Jasoda Giri overcame Pancreatic Cancer at Nepal Mediciti.",
        img: "https://focus.independent.ie/thumbor/0SwwJrLMooZvi8QpspX4OoL6XkY=/0x0:6000x3999/960x640/prod-mh-ireland/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea/ad65c6f4-da35-4f8b-80e4-7a27e334fac0/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea.jpg"
    },
    {
        title: "Lucky To Live",
        desc: "A child with injuries underwent successful surgery on both legs and head.",
        img: "https://focus.independent.ie/thumbor/0SwwJrLMooZvi8QpspX4OoL6XkY=/0x0:6000x3999/960x640/prod-mh-ireland/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea/ad65c6f4-da35-4f8b-80e4-7a27e334fac0/e10a66d1-2e26-4ec6-8e36-16b9d30f0dea.jpg"
    }
];

const sliderWrapper = document.getElementById("sliderWrapper");
const contentList = document.getElementById("contentList");

let currentIndex = 0;

function renderSlides() {
    sliderWrapper.innerHTML = "";
    data.forEach((item) => {
        const slide = document.createElement("div");
        slide.className = "amdaHospital1swiper-slide";
        slide.innerHTML = `
          <img src="${item.img}" alt="${item.title}">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
        `;
        sliderWrapper.appendChild(slide);
    });
}

function renderContentList() {
    contentList.innerHTML = "";
    data.forEach((item, index) => {
        const el = document.createElement("div");
        el.className = "amdaHospital1content-item";
        if (index === 0) el.classList.add("active");
        el.dataset.index = index;
        el.innerHTML = `<h3>${item.title}</h3><p>${item.desc}</p>`;
        contentList.appendChild(el);
    });
}

function updateSliderPosition() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    [...contentList.children].forEach((el, i) => {
        el.classList.toggle("active", i === currentIndex);
    });
}

function setupNavigation() {
    document.getElementById("nextBtn").onclick = () => {
        currentIndex = (currentIndex + 1) % data.length;
        updateSliderPosition();
    };
    document.getElementById("prevBtn").onclick = () => {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        updateSliderPosition();
    };
    [...contentList.children].forEach((item) => {
        item.onclick = () => {
            currentIndex = parseInt(item.dataset.index);
            updateSliderPosition();
        };
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderSlides();
    renderContentList();
    setupNavigation();
    updateSliderPosition();
});
// patient story slider end


// slider 2
// excelence in 
const sliderxy22 = document.getElementById('amdahsptl-fofo-slider');
const nxtbtnasja = document.querySelector('.amdahsptl-fofo-next');
const prvbtnskdj = document.querySelector('.amdahsptl-fofo-prev');
let crntIndxAmdHs = 0;

function updateSlider() {
    const slideWidth = sliderxy22.querySelector('.amdahsptl-fofo-slide').clientWidth;
    sliderxy22.style.transform = `translateX(-${crntIndxAmdHs * slideWidth}px)`;
}

nxtbtnasja.addEventListener('click', () => {
    const slides = sliderxy22.children.length;
    if (crntIndxAmdHs < slides - 1) {
        crntIndxAmdHs++;
        updateSlider();
    }
});

prvbtnskdj.addEventListener('click', () => {
    if (crntIndxAmdHs > 0) {
        crntIndxAmdHs--;
        updateSlider();
    }
});

window.addEventListener('resize', updateSlider);
window.addEventListener('load', updateSlider);
//  sloder 2