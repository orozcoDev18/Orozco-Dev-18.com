// ─────────────────────────────────────────────────────────────────────────────
// ⚠️  Datos de contacto. Lo que valga null sale en Contacto como "pendiente"
//     y sin enlace. Queda por rellenar el CV.
// ─────────────────────────────────────────────────────────────────────────────
export const PENDIENTE = {
  /** p. ej. "jose@orozcodev18.com" */
  email: "josemiguelorozcomartinez687@gmail.com" as string | null,
  /** p. ej. "https://www.linkedin.com/in/tu-usuario" */
  linkedin: "https://www.linkedin.com/in/jose-miguel-orozco-martinez-3768611a4/" as string | null,
  /** Ruta del PDF dentro de /public, p. ej. "/cv-jose-orozco.pdf" */
  cv: null as string | null,
};

export const perfil = {
  nombre: "Jose Miguel Orozco",
  rol: "Full Stack Software Developer",
  ubicacion: "Colombia",
  github: "https://github.com/orozcoDev18",
  githubUsuario: "@orozcoDev18",
  titular: "Jose Miguel Orozco — Full Stack Software Developer",
  subtitulo:
    "Construyendo experiencias web modernas, interfaces eficientes y herramientas interactivas de alto rendimiento.",
  disponibilidad: "Available for new opportunities",
};

export const sobreMi = [
  "Desarrollador Full Stack centrado en la arquitectura web escalable, los microservicios, las APIs robustas y las aplicaciones interactivas. Trabajo sobre el ecosistema TypeScript cuidando el rendimiento, el tipado estricto, las buenas prácticas y el desarrollo ágil.",
  "Escribo software limpio, modular y centrado en la experiencia de usuario. Lo que más me interesa es convertir ideas creativas en aplicaciones funcionales y escalables.",
];

export const stack = [
  {
    area: "Frontend & Mobile",
    tecnologias: [
      "Next.js (App Router y Server Components)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript ES6+",
      "HTML5 y CSS3 avanzado",
    ],
  },
  {
    area: "Backend & Arquitectura",
    tecnologias: [
      "Node.js",
      "NestJS",
      "APIs REST",
      "Arquitectura modular y desacoplada",
    ],
  },
  {
    area: "Datos",
    tecnologias: [
      "MySQL",
      "Prisma ORM",
      "Almacenamiento local",
      "Estado reactivo",
    ],
  },
  {
    area: "Tooling & Calidad",
    tecnologias: [
      "Git",
      "GitHub",
      "OpenCode",
      "VS Code",
      "Jest / testing de componentes",
    ],
  },
];

export const proyectos = [
  {
    nombre: "Gestión Finanzas JM",
    descripcion:
      "Control y seguimiento de finanzas personales, con registro intuitivo de ingresos y gastos.",
    etiquetas: ["Finanzas", "Dashboard", "Estado reactivo"],
    enlaces: [
      { etiqueta: "Repositorio", url: "https://github.com/orozcoDev18/gestion-finanzas-jm" },
    ],
  },
  {
    nombre: "Task Flow / Administrador de Tareas",
    descripcion:
      "Productividad y gestión de flujos de trabajo: tableros y control de estados.",
    etiquetas: ["Productividad", "Tableros", "Kanban"],
    enlaces: [
      { etiqueta: "Task Flow", url: "https://github.com/orozcoDev18/Task-flow" },
      { etiqueta: "Administrador de Tareas", url: "https://github.com/orozcoDev18/ADMINISTRADOR-DE-TAREA" },
    ],
  },
  {
    nombre: "Mi Tienda E-commerce",
    descripcion:
      "Comercio electrónico ligero con catálogo, gestión de compras y diseño responsivo.",
    etiquetas: ["E-commerce", "Catálogo", "Responsive"],
    enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/orozcoDev18/Mi-tienda" }],
  },
  {
    nombre: "Editor de Texto Web",
    descripcion:
      "Edición de texto enriquecido en el navegador, con formato y manipulación en tiempo real.",
    etiquetas: ["Rich text", "DOM", "Tiempo real"],
    enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/orozcoDev18/EditorDeTexto" }],
  },
  {
    nombre: "Tri-Ki",
    descripcion:
      "Tres en raya con lógica de estados optimizada, interfaz limpia y feedback visual dinámico.",
    etiquetas: ["Lógica de estados", "UI", "Juego"],
    enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/orozcoDev18/TRI-KI" }],
  },
  {
    nombre: "Módulo de Cambio de Tema",
    descripcion:
      "Alternancia dinámica entre Dark y Light con persistencia en cliente.",
    etiquetas: ["Dark/Light", "Persistencia", "DX"],
    enlaces: [{ etiqueta: "Repositorio", url: "https://github.com/orozcoDev18/CAMBIAR-TEMA" }],
  },
];
