// Animação suave ao aparecer na tela

const animatedElements = document.querySelectorAll(
    ".hero-text, .hero-visual, .section-heading, .category-card, .about-decoration, .about-text, .contact-content"
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

animatedElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});

// Botão de contato demonstrativo

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", (event) => {
    event.preventDefault();

    alert(
        "Esta é uma prévia demonstrativa da Cravo i Canela. O contato para encomendas será configurado na versão final."
    );
});