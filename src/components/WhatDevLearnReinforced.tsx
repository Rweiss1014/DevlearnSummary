import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reinforcements = [
  "Don't chase tech; chase behavioral impact",
  'Learners want content that fits into their work, not outside it',
  'We already have 60% of the raw materials—now we build systems around them',
];

export function WhatDevLearnReinforced() {
  return (
    <section id="reinforced" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">What DevLearn Reinforced</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Core principles that guide our path forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reinforcements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#00ae9a]/30 hover:border-[#00ae9a] transition-colors"
            >
              <CheckCircle2 className="w-10 h-10 text-[#00ae9a] mb-4" />
              <p className="text-slate-700 text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}