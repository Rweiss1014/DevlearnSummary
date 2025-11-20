import { motion } from 'motion/react';
import { Brain, BarChart3, Repeat, Gamepad2, Microscope } from 'lucide-react';
import { Card } from './ui/card';

const themes = [
  {
    icon: Brain,
    title: 'AI, but Make It Practical',
    description: 'AI tools are maturing, but only useful when paired with human expertise',
    color: 'blue',
  },
  {
    icon: BarChart3,
    title: 'Data > Completions',
    description: 'L&D needs to prove behavior change, not just seat time',
    color: 'indigo',
  },
  {
    icon: Repeat,
    title: 'Continuous Learning',
    description: 'From courses to flows of learning at the point of need',
    color: 'purple',
  },
  {
    icon: Gamepad2,
    title: 'Engagement at the Core',
    description: 'Gamification, storytelling, and real-life context are essential',
    color: 'pink',
  },
  {
    icon: Microscope,
    title: 'Science-Driven Design',
    description: "The tools change, but human behavior doesn't",
    color: 'violet',
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-[#ade2e3]', icon: 'text-[#007178]', border: 'border-[#ade2e3]' },
  indigo: { bg: 'bg-[#007178]/10', icon: 'text-[#007178]', border: 'border-[#007178]/30' },
  purple: { bg: 'bg-[#00ae9a]/20', icon: 'text-[#00ae9a]', border: 'border-[#00ae9a]/30' },
  pink: { bg: 'bg-[#093e52]/10', icon: 'text-[#093e52]', border: 'border-[#093e52]/30' },
  violet: { bg: 'bg-[#ffc629]/20', icon: 'text-[#093e52]', border: 'border-[#ffc629]/30' },
};

export function BigThemes() {
  return (
    <section id="themes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Big Themes from DevLearn 2025</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Five core insights that shaped the conference and our strategy moving forward
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            const colors = colorMap[theme.color];
            
            return (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-6 h-full hover:shadow-xl transition-shadow border-2 ${colors.border} bg-white`}>
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-slate-900 mb-2">{theme.title}</h3>
                  <p className="text-slate-600 text-sm">{theme.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}