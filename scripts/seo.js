// Script pour ajouter des données structurées JSON-LD à la page
document.addEventListener('DOMContentLoaded', function () {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Abiye Gebresilassie Enzo Emmanuel",
        "url": "https://abiyeenzo.github.io",
        "image": "https://abiyeenzo.github.io/assets/images/photo-pro.jpg",
        "sameAs": [
            "https://github.com/abiyeenzo",
            "www.linkedin.com/in/enzo-emmanuel-abiye-gebresilassie-2582b8225",
            "https://twitter.com/abiye_enzo"
        ],
        "jobTitle": "Développeur Python & Ethical Hacker",
        "description": "Abiye Enzo est un développeur Python passionné d'IA et de cybersécurité, créateur d'Æ Corporation."
    };

    // Créer un élément script avec type "application/ld+json"
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);

    // Ajouter le script au head du document
    document.head.appendChild(script);
});
