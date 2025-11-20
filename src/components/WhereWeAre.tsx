import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const alignments = [
  {
    title: 'Modular content',
    description: 'Our facilitator decks are becoming plug-and-play ready',
  },
  {
    title: 'Data-aware',
    description: 'Our capacity tracker is a strong foundation for strategy',
  },
  {
    title: 'Gamification',
    description: 'Our reskinnable PWO games are ahead of many orgs',
  },
  {
    title: 'Streamlining curriculum',
    description: 'Our 80/20 goal is what many are just starting to tackle',
  },
];

export function WhereWeAre() {
  return (
    <section id="aligned" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ade2e3]/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Where We're Already Aligned</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We're not starting from scratch—we're already ahead in several key areas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {alignments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-[#00ae9a]/30 hover:border-[#00ae9a] transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#00ae9a]" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}