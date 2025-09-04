document.addEventListener("mousemove", function(e) {
    const cursor = document.querySelector(".cursor-effect");
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
document.addEventListener("mousemove", function(e) {
    for (let i = 0; i < 4; i++) { // จำนวนอนุภาคต่อครั้ง
        const glitter = document.createElement("div");
        glitter.className = "glitter";

        // กำหนดตำแหน่งเริ่มต้น
        glitter.style.left = e.clientX + "px";
        glitter.style.top = e.clientY + "px";

        // สุ่มการกระจาย
        const offsetX = (Math.random() - 0.5) * 100 + "px";
        const offsetY = (Math.random() - 0.5) * 100 + "px";
        glitter.style.setProperty("--x", offsetX);
        glitter.style.setProperty("--y", offsetY);

        document.body.appendChild(glitter);

        // ลบอนุภาคหลังจากอนิเมชันจบ
        setTimeout(() => {
            glitter.remove();
        }, 1000);
    }
});