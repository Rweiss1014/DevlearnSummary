import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Without reflection, it's just an experience.",
    author: 'Karl Kapp',
  },
  {
    text: 'What have we done to earn credibility?',
    author: 'DevLearn Keynote',
  },
  {
    text: 'AI illusions of progress are dangerous',
    author: 'Industry panel',
  },
];

export function KeyQuotes() {
  return (
    <section id="quotes" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F2F2F2]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Key Quotes That Hit Home</h2>
          <p className="text-slate-600 text-lg">
            Words that resonated and shaped our thinking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#ade2e3] hover:border-[#007178] transition-colors relative"
            >
              <Quote className="w-8 h-8 text-[#ade2e3] absolute top-6 right-6" />
              <p className="text-slate-700 text-lg mb-4 italic">"{quote.text}"</p>
              <p className="text-slate-500 text-sm">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}