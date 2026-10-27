import {
  ArrowUpRight,
  Code2,
  Database,
  Download,
  Mail,
  Server,
  Wrench,
} from "lucide-react";
import { Github, Linkedin } from "@/components/Marcas";
import Image from "next/image";
import foto from "@/img/image.png";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import { PENDIENTE, perfil, proyectos, sobreMi, stack } from "@/data/perfil";

const iconosStack = [Code2, Server, Database, Wrench];

function Titulo({ etiqueta, children }: { etiqueta: string; children: React.ReactNode }) {
  return (
    <Reveal className="mb-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-acento">{etiqueta}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2>
    </Reveal>
  );
}

function Seccion({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-5xl px-5 py-20 sm:py-28">
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Seccion id="sobre-mi">
          <Titulo etiqueta="01 — About Me">Sobre mí</Titulo>
          <div className="grid items-start gap-5 md:grid-cols-[minmax(0,19rem)_1fr]">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border border-borde">
                <Image
                  src={foto}
                  alt={`${perfil.nombre}, ${perfil.rol}`}
                  placeholder="blur"
                  sizes="(min-width: 768px) 19rem, 100vw"
                  className="aspect-[4/5] w-full object-cover object-[47%_18%] grayscale-[60%] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  priority={false}
                />
                {/* El mural es muy saturado: lo bajamos al tono de la página */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-fondo via-fondo/25 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
              </div>
            </Reveal>

            <div className="grid gap-5">
              {sobreMi.map((parrafo, i) => (
                <Reveal key={i} delay={0.08 + i * 0.08}>
                  <p className="h-full rounded-2xl border border-borde bg-superficie/60 p-6 text-[15px] leading-relaxed text-apagado transition-colors duration-300 hover:border-zinc-700">
                    {parrafo}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Seccion>

        <Seccion id="stack">
          <Titulo etiqueta="02 — Stack">Tecnologías con las que trabajo</Titulo>
          <div className="grid gap-4 sm:grid-cols-2">
            {stack.map((grupo, i) => {
              const Icono = iconosStack[i % iconosStack.length];
              return (
                <Reveal key={grupo.area} delay={i * 0.06}>
                  <div className="group h-full rounded-2xl border border-borde bg-superficie/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-superficie">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-lg border border-borde bg-fondo text-acento transition-transform duration-300 group-hover:scale-110">
                        <Icono className="size-4" />
                      </span>
                      <h3 className="text-base font-medium">{grupo.area}</h3>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {grupo.tecnologias.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-borde bg-fondo px-2.5 py-1 text-xs text-apagado transition-colors duration-200 hover:border-zinc-600 hover:text-texto"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Seccion>

        <Seccion id="proyectos">
          <Titulo etiqueta="03 — Projects">Proyectos destacados</Titulo>
          <div className="grid gap-4 sm:grid-cols-2">
            {proyectos.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 0.05}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-borde bg-superficie/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:shadow-[0_16px_48px_#00000080]">
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-acento/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <h3 className="text-lg font-medium tracking-tight">{p.nombre}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-apagado">{p.descripcion}</p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.etiquetas.map((e) => (
                      <li
                        key={e}
                        className="rounded-md border border-borde bg-fondo px-2 py-0.5 font-mono text-[11px] text-zinc-500"
                      >
                        {e}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-borde pt-5">
                    {p.enlaces.map((e) => (
                      <a
                        key={e.url}
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded-lg border border-borde bg-fondo px-3 py-1.5 text-xs text-apagado transition-all duration-200 hover:border-zinc-600 hover:text-texto"
                      >
                        <Github className="size-3.5" />
                        {e.etiqueta}
                        <ArrowUpRight className="size-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Seccion>

        <Seccion id="github">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-borde bg-superficie/60 p-8 text-center sm:p-14">
              <div className="rejilla pointer-events-none absolute inset-0 opacity-60" />
              <div className="pointer-events-none absolute left-1/2 top-0 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-acento/15 blur-[100px]" />

              <div className="relative">
                <span className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl border border-borde bg-fondo">
                  <Github className="size-6" />
                </span>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Todo mi código, en abierto
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-apagado sm:text-base">
                  Repositorios, experimentos y herramientas: el sitio donde se ve cómo trabajo de
                  verdad. Pásate por mi perfil de GitHub.
                </p>
                <a
                  href={perfil.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_#ffffff26]"
                >
                  Visitar github.com/orozcoDev18
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </Seccion>

        <Seccion id="contacto">
          <Titulo etiqueta="04 — Contact">Hablemos</Titulo>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Contacto
              icono={<Github className="size-4" />}
              etiqueta="GitHub"
              valor={perfil.githubUsuario}
              href={perfil.github}
            />
            <Contacto
              icono={<Linkedin className="size-4" />}
              etiqueta="LinkedIn"
              valor={PENDIENTE.linkedin ? "Ver perfil" : "Pendiente de configurar"}
              href={PENDIENTE.linkedin}
            />
            <Contacto
              icono={<Mail className="size-4" />}
              etiqueta="Correo"
              valor={PENDIENTE.email ?? "Pendiente de configurar"}
              href={PENDIENTE.email ? `mailto:${PENDIENTE.email}` : null}
            />
            <Contacto
              icono={<Download className="size-4" />}
              etiqueta="Curriculum"
              valor={PENDIENTE.cv ? "Descargar CV (PDF)" : "Pendiente de configurar"}
              href={PENDIENTE.cv}
              descarga
            />
          </div>
        </Seccion>
      </main>

      <footer className="border-t border-borde px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {perfil.nombre}. {perfil.ubicacion}.
          </p>
          <p className="font-mono text-xs">Next.js · TypeScript · Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}

function Contacto({
  icono,
  etiqueta,
  valor,
  href,
  descarga = false,
}: {
  icono: React.ReactNode;
  etiqueta: string;
  valor: string;
  href?: string | null;
  descarga?: boolean;
}) {
  const clases =
    "group flex h-full flex-col gap-3 rounded-2xl border border-borde bg-superficie/60 p-5 transition-all duration-300";
  const contenido = (
    <>
      <span className="flex size-9 items-center justify-center rounded-lg border border-borde bg-fondo text-acento transition-transform duration-300 group-hover:scale-110">
        {icono}
      </span>
      <span>
        <span className="block text-sm font-medium">{etiqueta}</span>
        <span className="mt-0.5 block break-all text-xs text-apagado">{valor}</span>
      </span>
    </>
  );

  if (!href) {
    return (
      <div className={`${clases} opacity-50`} title="Falta rellenar este dato en src/data/perfil.ts">
        {contenido}
      </div>
    );
  }

  return (
    <a
      href={href}
      target={descarga ? undefined : "_blank"}
      rel="noopener noreferrer"
      download={descarga || undefined}
      className={`${clases} hover:-translate-y-1 hover:border-zinc-700 hover:bg-superficie`}
    >
      {contenido}
    </a>
  );
}
