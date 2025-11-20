import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles, Film, Target } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const insights = [
  {
    icon: Sparkles,
    title: 'AI Needs Strategy',
    color: 'blue',
    steps: [
      'Use Claude or ChatGPT to script basic training content and summaries',
      'Use Synthesia (a tool that turns text into AI-generated videos) or Pictory (turns PPTs or long text into video summaries) to convert pilot decks into short, visual assets',
      'Use SMEs as human reviewers before publishing',
      'Draft an internal SOP for quality control (2 review passes max)',
    ],
  },
  {
    icon: Film,
    title: 'Microlearning Is the Delivery Standard',
    color: 'indigo',
    steps: [
      'Break each training topic into 3-minute standalone lessons',
      'Record short videos using Loom (simple webcam and screen recording)',
      'Follow a structure: Hook > Teach > Try > Takeaway',
      'Deliver via LMS or email drip (Mailchimp or internal comms platform)',
    ],
  },
  {
    icon: Target,
    title: 'Behavior Change as the North Star',
    color: 'purple',
    steps: [
      'Identify 2-3 real-life behaviors per course we want to see',
      'Create post-course check-ins for managers to confirm observed behavior',
      'Match LMS scores with real outcomes (ex: fewer errors in reports)',
      'Visualize in dashboard form for easy review (use Google Looker Studio)',
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string; hover: string }> = {
  blue: { bg: 'bg-[#ade2e3]', icon: 'text-[#007178]', border: 'border-[#ade2e3]', hover: 'hover:border-[#007178]' },
  indigo: { bg: 'bg-[#007178]/10', icon: 'text-[#007178]', border: 'border-[#007178]/30', hover: 'hover:border-[#007178]' },
  purple: { bg: 'bg-[#00ae9a]/20', icon: 'text-[#00ae9a]', border: 'border-[#00ae9a]/30', hover: 'hover:border-[#00ae9a]' },
};

export function WhatStoodOut() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="standout" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">What Stood Out</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Three actionable insights with concrete implementation steps
          </p>
        </motion.div>

        <div className="space-y-6">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            const colors = colorMap[insight.color];
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden border-2 ${colors.border} ${colors.hover} transition-colors`}>
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-slate-900 mb-1">{insight.title}</h3>
                        <p className="text-slate-600 text-sm">Click to see how to implement</p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-200 bg-slate-50"
                    >
                      <div className="p-6">
                        <h4 className="text-slate-900 mb-4">How to do it:</h4>
                        <ul className="space-y-3">
                          {insight.steps.map((step, stepIndex) => (
                            <motion.li
                              key={stepIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: stepIndex * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <span className={`text-xs ${colors.icon}`}>{stepIndex + 1}</span>
                              </div>
                              <span className="text-slate-700 text-sm">{step}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}