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
        "@id": "https://abiyeenzo.vercel.app/#person",
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
        "url": "https://abiyeenzo.vercel.app/",
        "image": "https://abiyeenzo.vercel.app/assets/images/logo.png",
        "email": "mailto:abiyeenzo@gmail.com",
        "worksFor": {
          "@id": "https://abiyeenzo.vercel.app/#corporation"
        },
        "founder": {
          "@id": "https://abiyeenzo.vercel.app/#corporation"
        },
        "sameAs": [
          "https://app.hackthebox.com/profile/abiyeenzo",
          "https://github.com/abiyeenzo",
          "https://github.com/abiyeenzo/abiyeenzo.github.io",
          "https://www.linkedin.com/in/abiyeenzo",
          "https://www.wattpad.com/user/abiye_enzo",
          "https://www.instagram.com/abiye_enzo",
          "https://www.youtube.com/@abiye_enzo",
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
        "@id": "https://abiyeenzo.vercel.app/#corporation",
        "name": "Æ Corporation",
        "founder": {
          "@id": "https://abiyeenzo.vercel.app/#person"
        },
        "url": "https://abiyeenzo.vercel.app/",
        "logo": "https://abiyeenzo.vercel.app/assets/images/logo.png",
        "description": "Société d'ingénierie logicielle, de solutions de cybersécurité, d'audits techniques et d'outils Python avancés fondée par Abiye Enzo.",
        "sameAs": [
          "https://github.com/abiyeenzo",
          "https://abiyeenzo.vercel.app/"
        ]
      },
      {
        "@type": "ProfilePage",
        "@id": "https://abiyeenzo.vercel.app/#webpage",
        "url": "https://abiyeenzo.vercel.app/",
        "name": "Abiye Enzo - Portfolio Officiel | Développeur Python & Ethical Hacker",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://abiyeenzo.vercel.app/#website",
          "url": "https://abiyeenzo.vercel.app/",
          "name": "Abiye Enzo Official Hub"
        },
        "about": {
          "@id": "https://abiyeenzo.vercel.app/#person"
        },
        "mainEntity": {
          "@id": "https://abiyeenzo.vercel.app/#person"
        },
        "inLanguage": ["fr-FR", "en-US"]
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://abiyeenzo.vercel.app/#project-easy-language",
        "name": "Easy Language",
        "description": "Langage de programmation interprété en français (.elg), interpréteur écrit en C pur avec optimisations assembleur x86-64 inline.",
        "programmingLanguage": ["C", "Assembly"],
        "codeRepository": "https://github.com/abiyeenzo/easy-language",
        "url": "https://github.com/abiyeenzo/easy-language",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://abiyeenzo.vercel.app/#project-cve-2025-8671",
        "name": "CVE-2025-8671",
        "description": "Preuve de concept éducative pour la vulnérabilité CVE-2025-8671 (déni de service HTTP/2 sur lighttpd), usage laboratoire uniquement.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/abiyeenzo/CVE-2025-8671",
        "url": "https://github.com/abiyeenzo/CVE-2025-8671",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://abiyeenzo.vercel.app/#project-qr-pointage",
        "name": "QR Pointage System",
        "description": "Système de pointage par QR code : formulaire web, historique SQLite, export Excel quotidien.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/abiyeenzo/qr_pointage_system",
        "url": "https://github.com/abiyeenzo/qr_pointage_system",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": "https://abiyeenzo.vercel.app/#project-mathor",
        "name": "Mathor",
        "description": "Interpréteur de calcul en Python (fichiers .mth), arithmétique et résolution d'équations à une inconnue.",
        "programmingLanguage": "Python",
        "codeRepository": "https://github.com/abiyeenzo/Mathor",
        "url": "https://github.com/abiyeenzo/Mathor",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "WebSite",
        "@id": "https://abiyeenzo.vercel.app/#project-mapleroute",
        "name": "MapleRoute",
        "description": "Plateforme d'accompagnement à l'immigration canadienne (Entrée express) : calcul du score CRS, suivi des étapes, espaces client et agents. Projet client en cours, code source privé.",
        "url": "https://mapleroute.onrender.com/",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "WebSite",
        "@id": "https://abiyeenzo.vercel.app/#project-kaelix",
        "name": "Kaelix",
        "description": "Site vitrine avec formulaire de contact et espace admin protégé. Projet client livré, code source privé.",
        "url": "https://kaelix.onrender.com/",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "WebSite",
        "@id": "https://abiyeenzo.vercel.app/#project-saladerie",
        "name": "La Saladerie De Claudia",
        "description": "Site web du restaurant La Saladerie De Claudia à Douala. Projet client livré, code source privé.",
        "url": "https://la-saladerie-de-claudia.vercel.app/",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
      },
      {
        "@type": "WebSite",
        "@id": "https://abiyeenzo.vercel.app/#project-njangui",
        "name": "NJANGUI+",
        "description": "Plateforme de financement participatif (tontine digitale) avec paiements Mobile Money via Notch Pay. Produit Æ Corporation, code source privé.",
        "url": "https://njangui-plus.onrender.com/",
        "creator": { "@id": "https://abiyeenzo.vercel.app/#person" }
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
