import { motion } from 'framer-motion';

const keywords = ['Estrategia', 'Audiencias', 'Datos', 'Narrativa'];

export default function Hero() {
  const buttonClass =
    'inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-accent-alt hover:text-text-light shadow-[0_12px_24px_rgba(5,5,5,0.18)] hover:shadow-[0_18px_32px_rgba(5,5,5,0.22)]';

  return (
    <section className="flex h-[88vh] flex-col-reverse items-center justify-center gap-12 px-6 text-center md:flex-row md:text-left">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-xl"
      >
        <h1 className="text-5xl font-heading tracking-[-0.025em] leading-tight md:text-6xl">
          <span className="block text-text-light">
            <span className="rounded-full bg-text-light text-bg-main px-4 py-1">Sebastián Vedoya</span>
          </span>
          <span className="mt-3 block text-accent-alt">Comunicación estratégica</span>
        </h1>
        <p className="text-text-dim mt-6 text-lg font-medium">
          Periodista con más de 10 años de experiencia en medios y gobierno. Me dedico a buscar respuestas complejas para entornos
          complejos.
        </p>
        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {keywords.map((word) => (
            <motion.span
              key={word}
              className="rounded-full border border-black/10 bg-accent-alt/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-accent"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
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
