// Initial animation using GSAP
gsap.from(".text-container", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power4.out"
});

gsap.from(".image-container", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power4.out",
    delay: 0.5
});

// Hover effect for dynamic movement
document.querySelectorAll(".hero-image").forEach(image => {
    image.addEventListener("mousemove", (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gsap.to(image, {
            x: (x - rect.width / 2) * 0.05,
            y: (y - rect.height / 2) * 0.05,
            ease: "power2.out",
            overwrite: true
        });
    });

    image.addEventListener("mouseleave", () => {
        gsap.to(image, { x: 0, y: 0, ease: "power2.out" });
    });
});
