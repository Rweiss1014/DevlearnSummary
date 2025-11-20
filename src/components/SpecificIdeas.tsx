import { motion } from 'motion/react';
import { useState } from 'react';
import { Gamepad2, Calendar, Video } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card } from './ui/card';

const ideas = [
  {
    id: 'gamification',
    icon: Gamepad2,
    title: 'Gamification Hub',
    subtitle: 'A shared space where we store reusable learning games (HTML format)',
    color: 'blue',
    steps: [
      'Use basic HTML/JS templates (Phaser.js or H5P)',
      'Create themes with swappable icons, colors, and rules via JSON',
      'Host on an internal folder or shared GitHub repo',
      'Link via Storyline or LMS',
    ],
  },
  {
    id: 'capacity',
    icon: Calendar,
    title: 'Capacity Tracker 2.0',
    subtitle: 'An expanded visual dashboard of who can take on work',
    color: 'indigo',
    steps: [
      'Use Airtable to add: SME name, project name, estimated hours, due date',
      'Add views: by person, by team, by deadline',
      'Create alerts: notify if someone exceeds weekly capacity',
    ],
  },
  {
    id: 'video',
    icon: Video,
    title: 'AI Video Conversion',
    subtitle: 'Turn slides into explainer videos',
    color: 'purple',
    steps: [
      'Pick 1 high-usage PowerPoint deck',
      'Turn each slide into a short script (with Claude or manually)',
      'Use Synthesia to convert into video with AI avatar',
      'Embed videos in LMS; add short quizzes after each',
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-[#ade2e3]', icon: 'text-[#007178]', border: 'border-[#ade2e3]' },
  indigo: { bg: 'bg-[#007178]/10', icon: 'text-[#007178]', border: 'border-[#007178]/30' },
  purple: { bg: 'bg-[#00ae9a]/20', icon: 'text-[#00ae9a]', border: 'border-[#00ae9a]/30' },
};

export function SpecificIdeas() {
  const [activeTab, setActiveTab] = useState('gamification');

  return (
    <section id="ideas" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ade2e3]/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Specific Ideas to Implement</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Three concrete projects we can start building immediately
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {ideas.map((idea) => {
              const Icon = idea.icon;
              return (
                <TabsTrigger key={idea.id} value={idea.id} className="gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{idea.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {ideas.map((idea) => {
            const Icon = idea.icon;
            const colors = colorMap[idea.color];

            return (
              <TabsContent key={idea.id} value={idea.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className={`p-8 border-2 ${colors.border}`}>
                    <div className="flex items-start gap-6 mb-6">
                      <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${colors.icon}`} />
                      </div>
                      <div>
                        <h3 className="text-slate-900 mb-2">{idea.title}</h3>
                        <p className="text-slate-600">{idea.subtitle}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-6">
                      <h4 className="text-slate-900 mb-4">How to build:</h4>
                      <ul className="space-y-3">
                        {idea.steps.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`w-6 h-6 ${colors.bg} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <span className={`text-xs ${colors.icon}`}>{index + 1}</span>
                            </div>
                            <span className="text-slate-700">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}