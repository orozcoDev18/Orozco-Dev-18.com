# Orozco-Dev-18.com

Portafolio personal de **Jose Miguel Orozco** — Full Stack Software Developer.

Next.js (App Router) · TypeScript · Tailwind CSS · framer-motion · lucide-react.

## Arrancar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

```bash
npm run build   # build de producción
npm start       # servir el build
```

## Datos pendientes de rellenar

Todo el contenido vive en [`src/data/perfil.ts`](src/data/perfil.ts). Al principio del fichero está
el bloque `PENDIENTE` con tres valores en `null`:

| Valor | Qué poner |
| --- | --- |
| `email` | Tu correo de contacto, p. ej. `"jose@ejemplo.com"` |
| `linkedin` | La URL completa de tu perfil de LinkedIn |
| `cv` | La ruta del PDF dentro de `public/`, p. ej. `"/cv-jose-orozco.pdf"` (el fichero hay que copiarlo ahí) |

Mientras valgan `null`, esas tarjetas de la sección Contacto se ven apagadas y con el texto
"Pendiente de configurar", y no enlazan a ningún sitio.

## Desplegar en Vercel

1. Sube el repositorio a GitHub (ya apunta a `orozcoDev18/Orozco-Dev-18.com`).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js solo: no hay que tocar comandos ni variables de entorno.
4. Pulsa **Deploy**. Cada push a la rama por defecto vuelve a desplegar.
5. Para el dominio propio: **Settings › Domains**, añade `orozco-dev-18.com` y apunta el DNS a
   Vercel como te indique el panel.

Alternativa por consola: `npx vercel` (previsualización) y `npx vercel --prod` (producción).
