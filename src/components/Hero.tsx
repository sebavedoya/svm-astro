import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[88vh] text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-heading leading-tight"
      >
        Comunicación Estratégica<br/>
        <span className="text-accent">para entornos complejos</span>
      </motion.h2>
      <p className="text-text-dim max-w-xl mt-6 text-lg">
        Estratega en comunicación con más de 10 años de experiencia en medios y gobierno.
        Busco respuestas complejas para entornos complejos.
      </p>
      <motion.a
        href="/files/CV.pdf"
        className="mt-10 bg-accent hover:bg-[#0099b0] px-6 py-3 rounded-xl text-white font-semibold transition"
        whileHover={{ scale: 1.04 }}
      >
        Descargar CV
      </motion.a>
    </section>
  );
}
