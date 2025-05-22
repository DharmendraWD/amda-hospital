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

document.addEventListener('DOMContentLoaded', function () {
    const djkSlider = document.querySelector('.djk-slider');
    const djkPrevBtn = document.querySelector('.djk-prev');
    const djkNextBtn = document.querySelector('.djk-next');
    const djkSlides = document.querySelectorAll('.djk-slide');
    const djkSlideWidth = djkSlides[0].offsetWidth + 20; // Including gap

    let currentPosition = 0;
    const visibleSlides = Math.min(3, Math.floor(djkSlider.offsetWidth / djkSlideWidth));

    // Adjust for mobile view
    if (window.innerWidth < 768) {
        djkSlider.scrollLeft = 0;
    }

    djkNextBtn.addEventListener('click', function () {
        currentPosition += djkSlideWidth * visibleSlides;
        if (currentPosition > djkSlideWidth * (djkSlides.length - visibleSlides)) {
            // If we've scrolled to the duplicates, instantly reset to the beginning
            currentPosition = 0;
            djkSlider.scrollTo({
                left: currentPosition,
                behavior: 'instant'
            });
        }
        djkSlider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });

    djkPrevBtn.addEventListener('click', function () {
        currentPosition -= djkSlideWidth * visibleSlides;
        if (currentPosition < 0) {
            // If we're at the beginning, jump to the duplicates at the end
            currentPosition = djkSlideWidth * (djkSlides.length - visibleSlides);
            djkSlider.scrollTo({
                left: currentPosition,
                behavior: 'instant'
            });
        }
        djkSlider.scrollTo({
            left: currentPosition,
            behavior: 'smooth'
        });
    });

    // Auto-scroll for demonstration (optional)
    // setInterval(() => {
    //     djkNextBtn.click();
    // }, 3000);

    // Handle window resize
    window.addEventListener('resize', function () {
        const newVisibleSlides = Math.min(3, Math.floor(djkSlider.offsetWidth / djkSlideWidth));
        if (newVisibleSlides !== visibleSlides) {
            currentPosition = 0;
            djkSlider.scrollLeft = 0;
        }
    });
});
//  sloder 2