import { motion } from 'motion/react';
import { Rocket, Gamepad2, Blocks } from 'lucide-react';
import { Card } from './ui/card';

const builds = [
  {
    icon: Gamepad2,
    title: 'Gamified Learning Arcade MVP',
    subtitle: 'A small set of reusable games we can relaunch across different trainings',
    color: 'blue',
    steps: [
      'Choose 3 formats: rapid quiz, decision tree, memory match',
      'Code them with free tools like H5P or HTML + JS templates',
      'Store all game text and logic in a JSON file to enable reuse',
      'Use Google Sheets to store scores, build a leaderboard view with Glide or Sheets UI',
    ],
  },
  {
    icon: Blocks,
    title: 'Modular Content Automation',
    subtitle: 'Reusable blocks of slides, copy, and visuals we can plug in',
    color: 'indigo',
    steps: [
      'Pick top 5 modules to turn into templates',
      'Define: Title, Hook, Lesson, Challenge, Call-to-Action',
      'Save in Google Slides with locked layouts and notes fields',
      'Create AI prompts that turn raw content into this format (for future use)',
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-[#ade2e3]', icon: 'text-[#007178]', border: 'border-[#ade2e3]' },
  indigo: { bg: 'bg-[#00ae9a]/20', icon: 'text-[#00ae9a]', border: 'border-[#00ae9a]/30' },
};

export function NextBuilds() {
  return (
    <section id="builds" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#007178]/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="w-8 h-8 text-[#007178]" />
            <h2 className="text-slate-900">If We Build Anything Next...</h2>
          </div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Two high-impact projects to launch in Q1
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {builds.map((build, index) => {
            const Icon = build.icon;
            const colors = colorMap[build.color];

            return (
              <motion.div
                key={build.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`p-8 h-full border-2 ${colors.border} hover:shadow-xl transition-shadow`}>
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-slate-900 mb-2">{build.title}</h3>
                  <p className="text-slate-600 mb-6">{build.subtitle}</p>

                  <div className="bg-slate-50 rounded-lg p-6">
                    <h4 className="text-slate-900 mb-4">How to build:</h4>
                    <ul className="space-y-3">
                      {build.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className={`text-xs ${colors.icon}`}>{stepIndex + 1}</span>
                          </div>
                          <span className="text-slate-700 text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}