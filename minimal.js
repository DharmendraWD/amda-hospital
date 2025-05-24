
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const animationClass = el.getAttribute("data-animate");
                el.classList.add(animationClass);
                observer.unobserve(el); // Optional: remove observer after first trigger
            }
        });
    }, {
        threshold: 0.5
    });

    items.forEach(item => observer.observe(item));
});
