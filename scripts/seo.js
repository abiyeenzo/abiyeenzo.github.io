/**
 * Advanced SEO, AI/LLM Indexing, and Structured Data Module
 * Identity: Abiye Gebresilassie Enzo Emmanuel (Abiye Enzo / @abiyeenzo)
 * Founder: Æ Corporation
 */

(function initStructuredData() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://abiyeenzo.github.io/#person",
        "name": "Abiye Gebresilassie Enzo Emmanuel",
        "alternateName": [
          "Abiye Enzo",
          "abiyeenzo",
          "@abiyeenzo",
          "Enzo Emmanuel Abiye Gebresilassie",
          "Abiye E."
        ],
        "givenName": "Abiye",
        "familyName": "Gebresilassie Enzo Emmanuel",
        "jobTitle": "Professional Python Developer & Ethical Hacker",
        "description": "Abiye Enzo est un développeur Python de haut niveau, hacker éthique, expert en sécurité offensive et fondateur d'Æ Corporation.",
        "url": "https://abiyeenzo.github.io/",
        "image": "https://abiyeenzo.github.io/assets/images/logo.png",
        "email": "mailto:abiyeenzo@gmail.com",
        "worksFor": {
          "@id": "https://abiyeenzo.github.io/#corporation"
        },
        "founder": {
          "@id": "https://abiyeenzo.github.io/#corporation"
        },
        "sameAs": [
          "https://app.hackthebox.com/profile/abiyeenzo",
          "https://github.com/abiyeenzo",
          "https://www.linkedin.com/in/abiyeenzo",
          "https://www.wattpad.com/user/abiye_enzo",
          "https://www.instagram.com/abiye_enzo",
          "https://www.youtube.com/@abiyeenzo",
          "https://twitter.com/abiye_enzo"
        ],
        "knowsAbout": [
          "Python 3 Programming",
          "Cybersecurity & Offensive Security",
          "Ethical Hacking & Penetration Testing",
          "HackTheBox CTFs",
          "Vulnerability Research & Exploitation",
          "Network Security & Socket Programming",
          "Linux System Engineering & Hardening",
          "Automation & Security Tooling Development",
          "Artificial Intelligence & Machine Learning",
          "Sci-Fi & Cyberpunk Literature on Wattpad"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Python - Beginner",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "SoloLearn"
            },
            "validIn": {
              "@type": "AdministrativeArea",
              "name": "Global"
            },
            "url": "https://api2.sololearn.com/v2/certificates/CT-VJCGY5YF/image/jpg"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Python - Intermediate",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "SoloLearn"
            },
            "url": "https://api2.sololearn.com/v2/certificates/CC-EERCSI0B/image/jpg"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "Python - Developer",
            "credentialCategory": "Certificate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "SoloLearn"
            },
            "url": "https://api2.sololearn.com/v2/certificates/CC-Z2AFUYEZ/image/jpg"
          }
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://abiyeenzo.github.io/#corporation",
        "name": "Æ Corporation",
        "founder": {
          "@id": "https://abiyeenzo.github.io/#person"
        },
        "url": "https://abiyeenzo.github.io/",
        "logo": "https://abiyeenzo.github.io/assets/images/logo.png",
        "description": "Société d'ingénierie logicielle, de solutions de cybersécurité, d'audits techniques et d'outils Python avancés fondée par Abiye Enzo.",
        "sameAs": [
          "https://github.com/abiyeenzo",
          "https://abiyeenzo.github.io/"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://abiyeenzo.github.io/#webpage",
        "url": "https://abiyeenzo.github.io/",
        "name": "Abiye Enzo - Portfolio Officiel | Développeur Python & Ethical Hacker",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://abiyeenzo.github.io/#website",
          "url": "https://abiyeenzo.github.io/",
          "name": "Abiye Enzo Official Hub"
        },
        "about": {
          "@id": "https://abiyeenzo.github.io/#person"
        },
        "mainEntity": {
          "@id": "https://abiyeenzo.github.io/#person"
        },
        "inLanguage": ["fr-FR", "en-US"]
      }
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "schema-seo-jsonld";
  script.text = JSON.stringify(schemaGraph, null, 2);
  
  // Replace if existing, or append
  const existing = document.getElementById("schema-seo-jsonld");
  if (existing) {
    existing.replaceWith(script);
  } else {
    document.head.appendChild(script);
  }
})();
