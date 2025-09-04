document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".main-image");
    const buttons = document.querySelectorAll(".btn");
    const cards = document.querySelectorAll(".photo-card");
    const circles = document.querySelectorAll(".circle");

    // ================== 1. รูปหลัก hover + click ==================
    mainImage.addEventListener("mouseenter", () => {
        mainImage.style.transform = "scale(1.2) rotate(-2deg)";
        mainImage.style.filter = "brightness(1.2)";
        createGlitter(mainImage);
    });
    mainImage.addEventListener("mouseleave", () => {
        mainImage.style.transform = "scale(1) rotate(0deg)";
        mainImage.style.filter = "brightness(1)";
    });
    mainImage.addEventListener("click", () => {
        mainImage.style.transform = "scale(1.3)";
        setTimeout(() => mainImage.style.transform = "scale(1.2)", 300);
    });

    // ================== 2. ปุ่มเมนู hover ==================
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.1) rotate(-2deg)";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1) rotate(0deg)";
        });
    });

    // ================== 3. แกลเลอรี่ caption hover ==================
    cards.forEach(card => {
        const thumb = card.querySelector(".photo-thumb");
        const caption = card.querySelector(".photo-caption");

        // hover caption
        card.addEventListener("mouseenter", () => {
            if(caption) {
                caption.style.opacity = 1;
                caption.style.transform = "translateX(-50%) translateY(-15px)";
            }
            createGlitter(thumb);
        });
        card.addEventListener("mouseleave", () => {
            if(caption) {
                caption.style.opacity = 0;
                caption.style.transform = "translateX(-50%) translateY(0)";
            }
        });

        // click caption popup
        card.addEventListener("click", () => {
            let cap = card.querySelector('.photo-caption');
            if(!cap) {
                cap = document.createElement('div');
                cap.className = 'photo-caption';
                cap.innerText = card.dataset.caption;
                card.appendChild(cap);
            }
            cap.classList.add('show');
            setTimeout(() => cap.classList.remove('show'), 2000);
        });
    });

    // ================== 4. Background circle ขยับ ==================
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

    // ================== 5. Scroll effect ==================
    const sections = document.querySelectorAll('.content-section, .image-section, .logo-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('show-section');
            }
        });
    }, { threshold: 0.2 });
    sections.forEach(sec => observer.observe(sec));

    // ================== 6. Smooth scroll menu ==================
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

    // ================== 7. Glitter function ==================
    function createGlitter(parent){
        for(let i=0;i<8;i++){
            const glitter = document.createElement("span");
            glitter.className = "glitter";
            const x = Math.floor(Math.random()*120-60) + "px";
            const y = Math.floor(Math.random()*120-60) + "px";
            glitter.style.setProperty('--x', x);
            glitter.style.setProperty('--y', y);
            parent.appendChild(glitter);
            glitter.addEventListener("animationend", () => glitter.remove());
        }
    }
});