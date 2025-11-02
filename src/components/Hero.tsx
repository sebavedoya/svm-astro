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
        <h2 className="text-5xl font-heading leading-tight md:text-6xl">
          Comunicación Estratégica
          <br />
          <span className="text-accent">para entornos complejos</span>
        </h2>
        <p className="text-text-dim mt-6 text-lg">
          Estratega en comunicación con más de 10 años de experiencia en medios y gobierno. Busco respuestas complejas
          para entornos complejos.
        </p>
        <motion.a
          href="/files/CV.pdf"
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 font-semibold text-white transition hover:bg-[#0099b0]"
          whileHover={{ scale: 1.04 }}
        >
          Descargar CV
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative w-full max-w-md"
      >
        <div className="absolute inset-0 rounded-[2.5rem] bg-accent/20 blur-3xl" aria-hidden="true" />
        <img
          src="/images/hero-illustration.svg"
          alt="Ilustración de trabajo estratégico en comunicación"
          className="relative w-full rounded-[2.5rem] border border-white/10 shadow-2xl"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
