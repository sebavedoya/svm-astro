import { motion } from 'framer-motion';

export default function Hero() {
  const buttonClass =
    'inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-alt hover:text-text-light';

  return (
    <section className="flex h-[88vh] flex-col-reverse items-center justify-center gap-12 px-6 text-center md:flex-row md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-heading tracking-[-0.025em] leading-tight md:text-6xl">
          <span className="block text-text-light">Sebastián Vedoya</span>
          <span className="block text-text-light">Comunicación estratégica</span>
        </h1>
        <p className="text-text-dim mt-6 text-lg font-medium">
          Periodista con más de 10 años de experiencia en medios y gobierno. Me dedico a buscar respuestas complejas para entornos
          complejos.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            href="/files/CV.pdf"
            className={buttonClass}
            whileHover={{ scale: 1.04 }}
          >
            Descargar CV
          </motion.a>
          <a
            href="mailto:seba.vedoya@gmail.com"
            className={buttonClass}
          >
            seba.vedoya@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sebastianvedoyam/"
            target="_blank"
            rel="noopener"
            className={buttonClass}
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
          src="/images/hero-illustration.jpg"
          alt="Ilustración de trabajo estratégico en comunicación"
          className="relative w-full rounded-[2.5rem] border border-black/10 shadow-2xl"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
