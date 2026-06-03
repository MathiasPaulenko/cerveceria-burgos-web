export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      carta: "Carta",
      nosotros: "Nosotros",
      galeria: "Galería",
      contacto: "Contacto",
    },
    hero: {
      location: "Carabanchel, Madrid · Desde 2015",
      tagline: "Buena cerveza, buena gente, buen momento",
      badges: {
        beer: "Cañas bien frías",
        tapas: "Tapas generosas",
        service: "Buen Servicio",
        terrace: "Terraza",
      },
      scrollDown: "Descubre más",
    },
    menu: {
      title: "Nuestra",
      highlight: "Carta",
      subtitle: "Cervezas artesanales, tapas caseras y platos de siempre",
      tabs: {
        cervezas: "Cervezas",
        mojitos: "Mojitos",
        margaritas: "Margaritas",
        tapas: "Tapas",
        raciones: "Raciones",
      },
    },
    about: {
      label: "Sobre Nosotros",
      title: "El corazón de",
      highlight: "Carabanchel",
      description:
        "Desde 2015, Cervecería Burgos es punto de encuentro para los vecinos de Carabanchel. Empezamos con una idea simple: servir cerveza bien fría y tapas generosas en un ambiente donde todo el mundo se sienta como en casa.",
      paragraphs: [
        "En Cervecería Burgos encontrarás buena cerveza servida en vaso grande y con tapa generosa.",
        "Cervezas bien frías, tapas para compartir y una terraza que invita a quedarse.",
        "Ven con hambre y gana de disfrutar: aquí se come bien, se paga bien y se vuelve con frecuencia.",
      ],
      values: [
        { title: "Calidad", desc: "Ingredientes frescos y recetas de toda la vida" },
        { title: "Ambiente", desc: "Un espacio acogedor para disfrutar con amigos" },
        { title: "Tradición", desc: "Más de 8 años dejando huella en el barrio" },
      ],
      features: {
        schedule: { title: "Horario", subtext: "Cenas y copas" },
        location: { title: "Ubicación" },
        terrace: { title: "Terraza", desc: "Terraza exterior popular", subtext: "Llega con antelación los fines de semana" },
      },
    },
    gallery: {
      label: "Galería",
      title: "Cervecería",
      highlight: "Burgos",
      filters: {
        all: "Todas",
        local: "El Local",
        tapas: "Tapas",
        comida: "Comida",
      },
      pagination: {
        prev: "← Anterior",
        next: "Siguiente →",
      },
      lightbox: {
        close: "Cerrar imagen",
        prev: "Imagen anterior",
        next: "Imagen siguiente",
      },
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      subtitle: "En el corazón de Carabanchel, a un paso del metro Eugenia de Montijo",
      cards: {
        address: {
          title: "Dirección",
          lines: ["Calle Eugenia de Montijo, 80", "28025 Madrid (Carabanchel)"],
          extra: "Metro: Eugenia de Montijo (L11) - 696m",
          link: "Cómo llegar",
        },
        schedule: {
          title: "Horario",
          lines: ["Lunes a Sábado"],
          highlight: "06:00 - 00:00",
          extra: "Cenas y copas",
        },
        phone: {
          title: "Teléfono",
        },
        parking: {
          title: "¿Vienes en coche?",
          desc: "Parking disponible en {garage} (345m)",
        },
      },
      socials: "Síguenos en redes",
    },
    footer: {
      tagline: "Buena cerveza, buena gente, buen momento.",
      copyright: "© {year} Cervecería Burgos",
      developer: "Diseño y desarrollo por Mathias Paulenko",
    },
    privacy: {
      title: "Política de Privacidad",
      back: "Volver al inicio",
    },
  },
  en: {
    nav: {
      inicio: "Home",
      carta: "Menu",
      nosotros: "About",
      galeria: "Gallery",
      contacto: "Contact",
    },
    hero: {
      location: "Carabanchel, Madrid · Since 2015",
      tagline: "Good beer, good people, good times",
      badges: {
        beer: "Ice-cold beers",
        tapas: "Generous tapas",
        service: "Great Service",
        terrace: "Terrace",
      },
      scrollDown: "Discover more",
    },
    menu: {
      title: "Our",
      highlight: "Menu",
      subtitle: "Craft beers, homemade tapas and classic dishes",
      tabs: {
        cervezas: "Beers",
        mojitos: "Mojitos",
        margaritas: "Margaritas",
        tapas: "Tapas",
        raciones: "Raciones",
      },
    },
    about: {
      label: "About Us",
      title: "The heart of",
      highlight: "Carabanchel",
      description:
        "Since 2015, Cervecería Burgos has been a meeting point for Carabanchel locals. We started with a simple idea: serve ice-cold beer and generous tapas in a place where everyone feels at home.",
      paragraphs: [
        "At Cervecería Burgos you'll find good beer served in a large glass with a generous tapa.",
        "Ice-cold beers, tapas to share and a terrace that invites you to stay.",
        "Come hungry and ready to enjoy: here you eat well, pay fairly and return often.",
      ],
      values: [
        { title: "Quality", desc: "Fresh ingredients and timeless recipes" },
        { title: "Atmosphere", desc: "A cozy space to enjoy with friends" },
        { title: "Tradition", desc: "Over 8 years making our mark on the neighborhood" },
      ],
      features: {
        schedule: { title: "Hours", subtext: "Dinner and drinks" },
        location: { title: "Location" },
        terrace: { title: "Terrace", desc: "Popular outdoor terrace", subtext: "Arrive early on weekends" },
      },
    },
    gallery: {
      label: "Gallery",
      title: "Cervecería",
      highlight: "Burgos",
      filters: {
        all: "All",
        local: "The Place",
        tapas: "Tapas",
        comida: "Food",
      },
      pagination: {
        prev: "← Previous",
        next: "Next →",
      },
      lightbox: {
        close: "Close image",
        prev: "Previous image",
        next: "Next image",
      },
    },
    contact: {
      label: "Contact",
      title: "Get in Touch",
      subtitle: "In the heart of Carabanchel, steps away from Eugenia de Montijo metro",
      cards: {
        address: {
          title: "Address",
          lines: ["Calle Eugenia de Montijo, 80", "28025 Madrid (Carabanchel)"],
          extra: "Metro: Eugenia de Montijo (L11) - 696m",
          link: "Directions",
        },
        schedule: {
          title: "Hours",
          lines: ["Monday to Saturday"],
          highlight: "06:00 - 00:00",
          extra: "Dinner and drinks",
        },
        phone: {
          title: "Phone",
        },
        parking: {
          title: "Coming by car?",
          desc: "Parking available at {garage} (345m)",
        },
      },
      socials: "Follow us",
    },
    footer: {
      tagline: "Good beer, good people, good times.",
      copyright: "© {year} Cervecería Burgos",
      developer: "Design and development by Mathias Paulenko",
    },
    privacy: {
      title: "Privacy Policy",
      back: "Back to home",
    },
  },
};

export type Translations = typeof translations.es;
