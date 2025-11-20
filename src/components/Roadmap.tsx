import { motion } from 'motion/react';
import { Calendar, Clock, Target } from 'lucide-react';
import { Card } from './ui/card';

const timeframes = [
  {
    id: 'near-term',
    title: 'Near-Term Focus',
    subtitle: '0–3 Months',
    icon: Clock,
    color: '#007178',
    items: [
      'Explore Power Automate + SmartSheet integration for meeting → task workflows.',
      'Host initial skill-up sessions on PWOs and gamified micro-learning.',
      'Define the Tutor Chatbot pilot: pick a module, set success criteria, outline guardrails.',
    ],
  },
  {
    id: 'mid-term',
    title: 'Mid-Term Focus',
    subtitle: '3–6 Months',
    icon: Calendar,
    color: '#00ae9a',
    items: [
      'Launch the Tutor Chatbot pilot and gather learner + facilitator feedback.',
      'Embed first PWOs into global modules for Project Impact and the Academy.',
      'Explore mentorship tooling options (including "Together") with LMS/HR stakeholders.',
    ],
  },
  {
    id: 'long-term',
    title: 'Longer-Term Focus',
    subtitle: '6–12 Months',
    icon: Target,
    color: '#093e52',
    items: [
      'Standardize templates: PWO patterns, Tutor flows, micro-challenge types.',
      'Build a simple playbook: when to use PWOs, when to add a Tutor, when to add mentorship.',
      'Scale what proves useful; retire what doesn\'t.',
    ],
  },
];

export function Roadmap() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-slate-900 mb-4">Roadmap / Next Steps</h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            From DevLearn insights to real pilots
          </p>
        </motion.div>

        <div className="space-y-8">
          {timeframes.map((timeframe, index) => {
            const Icon = timeframe.icon;
            return (
              <motion.div
                key={timeframe.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 border-l-4" style={{ borderLeftColor: timeframe.color }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${timeframe.color}20` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: timeframe.color }} />
                    </div>
                    <div>
                      <h2 className="text-slate-900 mb-1">{timeframe.title}</h2>
                      <p className="text-slate-600">{timeframe.subtitle}</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {timeframe.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 group">
                        <div 
                          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border-2"
                          style={{ 
                            borderColor: timeframe.color,
                            backgroundColor: 'white'
                          }}
                        >
                          <div 
                            className="w-2 h-2 rounded-full transition-transform group-hover:scale-150"
                            style={{ backgroundColor: timeframe.color }}
                          />
                        </div>
                        <span className="text-slate-700 flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-br from-[#007178]/10 to-[#00ae9a]/10 border-2 border-[#007178]/30">
            <div className="text-center">
              <h3 className="text-slate-900 mb-4">Our Approach</h3>
              <p className="text-slate-700 text-lg max-w-3xl mx-auto">
                We're moving from exploration to execution, starting small, learning fast, and scaling what works. Each timeframe builds on the last, turning DevLearn ideas into sustainable systems.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}