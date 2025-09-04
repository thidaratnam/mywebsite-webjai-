document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");
    const circles = document.querySelectorAll(".circle");

    // ปุ่ม hover effect
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1) rotate(-2deg)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1) rotate(0deg)";
        });
    });

    // Background circles animation
    let angle = 0;
    function animateCircles() {
        angle += 0.002;
        circles.forEach((circle, i) => {
            let x = Math.sin(angle + i) * 10;
            let y = Math.cos(angle + i) * 10;
            circle.style.transform = `translate(${x}px, ${y}px)`;
        });
        requestAnimationFrame(animateCircles);
    }
    animateCircles();

    // Smooth scroll ถ้ามี anchor
    document.querySelectorAll('.shortcut-buttons a').forEach(link => {
        link.addEventListener('click', e => {
            if(link.getAttribute('href').startsWith('#')){
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if(target){
                    window.scrollTo({
                        top: target.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});