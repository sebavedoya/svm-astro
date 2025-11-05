import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20">
      <span
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-alt/25 blur-3xl md:-left-20"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -bottom-24 right-[-15%] h-96 w-96 rounded-full border border-black/5 bg-white/20 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex w-full max-w-4xl flex-col gap-8 text-center md:text-left"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="space-y-1 text-5xl font-heading leading-tight md:text-6xl"
        >
          <span className="block text-text-light">Sebastián Vedoya M.</span>
          <span className="block text-text-light">
            <span className="title-highlight">Comunicación estratégica.</span>
          </span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.25 }}
          className="max-w-2xl text-lg text-text-dim md:text-xl"
        >
          Periodista con más de 10 años de experiencia en medios y gobierno. Me especializo en buscar respuestas complejas para entornos
          complejos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.04 }}
            href="mailto:seba.vedoya@gmail.com"
            className="btn"
          >
            Contáctame
          </motion.a>
          <a
            href="/files/CV.pdf"
            className="btn"
          >
            Descargar CV
          </a>
          <a
            href="https://www.linkedin.com/in/sebastianvedoyam/"
            target="_blank"
            rel="noopener"
            className="btn"
          >
            LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
