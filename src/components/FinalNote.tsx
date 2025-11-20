import { motion } from 'motion/react';
import { Lightbulb, Zap, Wrench, Rocket } from 'lucide-react';

const takeaways = [
  {
    icon: Lightbulb,
    text: 'Examples of what works',
  },
  {
    icon: Zap,
    text: 'Tools to try fast, fail small',
  },
  {
    icon: Wrench,
    text: 'Models we can mimic and build ourselves',
  },
];

const q1Launches = [
  'Gamified microlearning arcade',
  'Modular content builder powered by AI + templates',
];

export function FinalNote() {
  return (
    <section id="final" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#007178] via-[#093e52] to-[#00ae9a] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Final Note</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20"
        >
          <h3 className="text-white mb-6 text-center">DevLearn gave us:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {takeaways.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-lg">{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 shadow-2xl"
        >
          <p className="text-white text-xl mb-6 text-center">
            We're not followers. We're capable of leading internally.
          </p>
          
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-white" />
              <h3 className="text-white">Let's launch 2 builds in Q1:</h3>
            </div>
            <ul className="space-y-3">
              {q1Launches.map((launch, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-white text-lg">{launch}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <p className="text-white text-2xl">Let's go.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}