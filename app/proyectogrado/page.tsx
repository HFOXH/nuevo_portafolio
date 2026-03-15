"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProyectoPage() {
  const posterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = posterRef.current;
    if (!el) return;

    const height = el.clientHeight;
    const width = el.clientWidth;

    const handleMove = (evt: MouseEvent) => {
      const rect = el.getBoundingClientRect();

      const layerX = evt.clientX - rect.left;
      const layerY = evt.clientY - rect.top;

      const yRotation = ((layerX - width / 2) / width) * 20;
      const xRotation = ((layerY - height / 2) / height) * 20;

      const string = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

      el.style.transform = string;
    };

    const handleLeave = () => {
      el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const greenButton =
    "group inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full border border-main text-main transition-colors duration-300 hover:bg-main hover:text-black";

  return (
    <main className="bg-black text-white dark:bg-gray-300 dark:text-white transition-colors duration-300">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h1 className="text-4xl font-bold mb-4 text-white">Proyecto de Grado</h1>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-10">
            Este fue nuestro desarrollo
          </p>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            Este es nuestro proyecto de grado. En resumidas palabras hicimos un
            acuerdo con la universidad para que el proyecto fuera tomado como
            prácticas laborales.
            <br />
            <br />
            El proyecto consistió en desarrollar <b>cinco softwares</b>.
          </p>
        </motion.div>
      </section>

      {/* FRASE */}
      <section className="">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <div
            ref={posterRef}
            className="max-w-4xl mx-auto bg-black-light border border-main text-white text-center px-10 py-16 rounded-xl shadow-xl transition-transform duration-200"
          >
            <h2 className="text-2xl font-semibold">
              "El software es un gran arte, y los programadores son los artistas."
            </h2>

            <p className="mt-4 opacity-80">Gerald Weinberg</p>
          </div>
        </motion.div>
      </section>

      {/* SISTEMA ASISTENCIA */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Image
            src="/assets/img/Asistencia.png"
            alt="Sistema asistencia"
            width={500}
            height={400}
            className="-rotate-6 rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-3">Sistemas de Asistencia</h2>

          <p className="text-neutral-400 mb-6">
            Uno para empleados y otro para docentes
          </p>

          <p className="leading-relaxed">
            Este sistema fue desarrollado para llevar el control de asistencia
            de empleados mediante un huellero biométrico.
            <br /><br />
            Además automatizamos hojas de Google Spreadsheet para analizar los
            registros y calcular la nómina automáticamente.
            <br /><br />
            Luego se desarrolló otro sistema similar para docentes.
          </p>

          <a href="https://youtu.be/d7A7heRkJ1c" target="_blank" className={greenButton}>
            Ver funcionamiento →
          </a><br />
          <a href="/assets/doc/Manual Tecnico Asistencia Empleados.pdf" target="_blank" className={greenButton}>
            Ver manual técnico →
          </a>
        </motion.div>

      </section>

      {/* INVITACIONES */}
      <section className="bg-black-light py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-3">Sistema de Invitaciones</h2>

            <p className="text-neutral-400 mb-6">
              Control de invitaciones de grado
            </p>

            <p className="leading-relaxed">
              Este sistema originalmente fue desarrollado por otros estudiantes.
              Nosotros corregimos errores y lo optimizamos.
              <br /><br />
              Permite organizar las invitaciones de grado de estudiantes. Cada
              invitación se valida mediante un <b>QR</b> usando una aplicación
              móvil.
            </p>

            <a href="https://www.youtube.com/watch?v=Htdf5-tqEKg" target="_blank" className={greenButton}>
            Ver demo →
          </a>
          <br />
          <a href="/assets/doc/Manual Tecnico Invitaciones.pdf" target="_blank" className={greenButton}>
            Ver manual técnico →
          </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Image
              src="/assets/img/Invitaciones.png"
              alt="Invitaciones"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* APP MOVIL */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Image
            src="/assets/img/AplicacionMovil.png"
            alt="Aplicacion movil"
            width={400}
            height={500}
            className="-rotate-6 rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-3">Aplicación móvil</h2>

          <p className="text-neutral-400 mb-6">
            Aplicación para estudiantes
          </p>

          <p className="leading-relaxed">
            El desarrollo fue completamente desde cero. No conocíamos Ionic ni
            cómo consumir APIs.
            <br /><br />
            Tuvimos que aprender a crear una API en ASP.NET conectada a SQL
            Server.
            <br /><br />
            La app permite: consultar notas, noticias, certificados,
            solicitudes, PQRs y más.
          </p>

          <a href="https://youtu.be/E0sOvie3iDY" target="_blank" className={greenButton}>
            Ver demo →
          </a><br />
          <a href="/assets/doc/Manual Tecnico App Movil.pdf" target="_blank" className={greenButton}>
            Ver manual técnico →
          </a>
        </motion.div>

      </section>

      {/* TOUCHSCREEN */}
      <section className="bg-black-light py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-3">TouchScreen</h2>

            <p className="text-neutral-400 mb-6">
              Autoservicio para estudiantes
            </p>

            <p className="leading-relaxed">
              Basado en el sistema anterior, desarrollamos un sistema optimizado
              para pantallas táctiles.
              <br /><br />
              Los estudiantes pueden: imprimir certificados, consultar estado
              de cuenta, generar paz y salvos y realizar solicitudes rápidamente.
            </p>

            <a href="https://youtu.be/kzIrvKvGXS8" target="_blank" className={greenButton}>
              Ver demo →
            </a><br />
            <a href="/assets/doc/Manual Tecnico TouchScreen.pdf" target="_blank" className={greenButton}>
            Ver manual técnico →
          </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Image
              src="/assets/img/TouchScreen2.png"
              alt="Touchscreen"
              width={500}
              height={400}
              className="rotate-6 rounded-xl shadow-lg"
            />
          </motion.div>

        </div>
      </section>

      {/* EQUIPO */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold mb-4">
            El equipo de desarrollo
          </h2>

          <p className="text-neutral-400 dark:text-gray-400 mb-10">
            El mejor equipo de trabajo
          </p>

          <p>
            Yo, <b>Santiago Cárdenas</b> fui el líder durante todo el proceso de este maravilloso grupo. <br />
                        Quiero agradecer en este espacio a todas las personas que me brindaron su apoyo y ayuda durante el desarrollo de estos 5 softwares. <b>Duván Peñata</b>, <b>Ilian Maussa</b>, <b>Jarol García</b>, <b>Jhordan Flórez</b>, <b>Jonathan Daza</b>, 
                        <b>Kevin Gil</b>, <b>Meijan García</b> y <b>Santiago Peñaloza</b>, por sus valiosas contribuciones y por estar siempre dispuestos a ayudarme sin importar la dificultad del problema que presentaramos. Sin su ayuda, no habría sido posible completar estos proyectos en el tiempo y con la calidad que esperábamos. <br /><b>¡Muchas gracias por todo su esfuerzo y dedicación!</b>
          </p>
<br />
          <Image
            src="/assets/img/grupo.jpg"
            alt="Equipo"
            width={800}
            height={500}
            className="rounded-xl shadow-lg mx-auto"
          />

          <div className="mt-8">
            <Link
              href="/assets/doc/Proyecto de Grado Final.pdf"
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full border border-main text-main transition-colors duration-300 hover:bg-main hover:text-black"
            >
              Descargar PDF del proyecto
            </Link>
          </div>
        </motion.div>

      </section>

    </main>
  );
}