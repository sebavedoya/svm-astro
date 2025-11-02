import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex h-[88vh] flex-col-reverse items-center justify-center gap-12 px-6 text-center md:flex-row md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-heading leading-tight md:text-6xl">
          Sebastián Vedoya M.
          <br />
          <span className="text-accent">Comunicación Estratégica</span>
        </h1>
        <p className="text-text-dim mt-6 text-lg">
          Estratega en comunicación con más de 10 años de experiencia en medios y gobierno. Me dedico a buscar respuestas
          complejas para entornos complejos.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="/files/CV.pdf"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-[#e44124]"
            whileHover={{ scale: 1.04 }}
          >
            Descargar CV
          </motion.a>
          <a
            href="mailto:seba.vedoya@gmail.com"
            className="inline-flex items-center rounded-full bg-accent-alt px-5 py-2 text-sm font-semibold text-text-light transition hover:bg-[#ffe24f]"
          >
            seba.vedoya@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sebastianvedoyam/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center rounded-full border border-black/10 px-5 py-2 text-sm font-semibold text-text-light transition hover:border-accent hover:bg-white"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-accent-alt/40 blur-3xl" aria-hidden="true" />
        <img
          src="/images/hero-illustration.svg"
          alt="Ilustración de trabajo estratégico en comunicación"
          className="relative w-full rounded-[2.5rem] border border-black/10 shadow-2xl"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
