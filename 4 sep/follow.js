document.addEventListener("DOMContentLoaded", () => {

    // ================= Glitter effect on social buttons =================
    const socialButtons = document.querySelectorAll('.social-btn');

    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            createGlitter(btn);
        });
    });

    // ================= Glitter function =================
    function createGlitter(parent){
        for(let i=0;i<5;i++){
            const glitter = document.createElement("span");
            glitter.className = "glitter";
            const x = Math.floor(Math.random()*120-60) + "px";
            const y = Math.floor(Math.random()*120-60) + "px";
            glitter.style.setProperty('--x', x);
            glitter.style.setProperty('--y', y);
            document.body.appendChild(glitter);
            glitter.addEventListener("animationend", () => glitter.remove());
        }
    }
});