import { motion } from 'motion/react';
import { ArrowDown, Target, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const scrollToThemes = () => {
    document.getElementById('themes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ade2e3]/30 via-[#007178]/10 to-[#00ae9a]/20" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-slate-900 mb-6">
            DevLearn 2025 Debrief
          </h1>
          <p className="text-slate-600 text-xl mb-12 max-w-3xl mx-auto">
            What We Can Actually Use at AssistRx
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
            >
              <div className="w-12 h-12 bg-[#ade2e3] rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="w-6 h-6 text-[#007178]" />
              </div>
              <h3 className="text-slate-900 mb-2">Clear Goal</h3>
              <p className="text-slate-600 text-sm">
                Extract real-world value, actionable strategies, and industry insight
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-slate-200"
            >
              <div className="w-12 h-12 bg-[#00ae9a]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="w-6 h-6 text-[#00ae9a]" />
              </div>
              <h3 className="text-slate-900 mb-2">Actionable Results</h3>
              <p className="text-slate-600 text-sm">
                Next steps we can act on right away—not just show-and-tell
              </p>
            </motion.div>
          </div>

          <Button
            onClick={scrollToThemes}
            size="lg"
            className="group"
          >
            Let's Dive In
            <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}