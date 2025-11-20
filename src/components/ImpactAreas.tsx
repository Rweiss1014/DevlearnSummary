import { motion } from 'motion/react';
import { Users, Lightbulb, MessageSquare, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';

const areas = [
  {
    id: 'ld-whole',
    icon: Users,
    title: 'L&D as a Whole',
    subtitle: 'Automating the Work About the Work',
    headline: 'Automate the admin so we can focus on impact.',
    challenge: 'Right now, meeting notes, actions, and project updates live in different places. We spend a lot of time retyping decisions into trackers, chasing "who owns what," and manually updating statuses.',
    devlearnInsight: 'Teams are using automation and AI to take meeting outputs and turn them directly into trackable work. The good news: we don\'t need new platforms to start this. We already have:',
    tools: ['Teams transcription', 'Copilot', 'Power Automate', 'SmartSheet'],
    examples: [
      'Auto-create SmartSheet tasks directly from Teams meeting transcripts.',
      'Detect phrases like "Rachel will…" or "Alyssa to…" and assign tasks with owners and due dates.',
      'Auto-update project status fields in SmartSheet when progress is discussed in meetings.',
      'Send a daily summary of changed tasks or statuses across key project sheets.',
    ],
    nextMove: 'Next move: start experimenting with Power Automate flows tied to Teams transcripts and SmartSheet to see what we can automate quickly.',
    color: '#007178',
  },
  {
    id: 'instructional-designers',
    icon: Lightbulb,
    title: 'Instructional Designers',
    subtitle: 'Gamified Micro-Learning with PWOs',
    headline: 'PWOs + micro-learning = scalable, engaging training.',
    challenge: 'We\'re expected to deliver more, faster, and with higher engagement—without adding more people. We need reusable patterns, not one-off hero projects.',
    devlearnInsight: 'Gamification and micro-learning (often backed by AI) are central trends in modern L&D. Our Portable Web Objects strategy sits right in that space: small, focused, reskinnable interactive pieces that plug into Storyline and other formats.',
    examples: [
      'Turn a key concept into a 60–90 second PWO mini-game (e.g., identify the right choice, spot the error, sequence the steps).',
      'Convert a long SOP into a micro "spot-the-error" challenge instead of a static PDF.',
      'Turn a workflow into a branching scenario where learners choose the next step and see immediate feedback.',
      'Use AI to generate multiple versions (different distractors, tones, or difficulty levels) without rebuilding from scratch.',
    ],
    plannedActions: [
      'Show how PWOs work under the hood',
      'Walk through reskinning content using CSVs or simple data files',
      'Connect PWOs to global modules for Project Impact and the Academy',
    ],
    nextMove: 'Host short internal sessions to demonstrate PWO capabilities and reskinning workflows.',
    color: '#00ae9a',
  },
  {
    id: 'facilitators',
    icon: MessageSquare,
    title: 'Facilitators & Business Partners',
    subtitle: 'Always-On Chat Tutor',
    headline: 'Extend facilitation with an in-course conversational tutor.',
    challenge: 'Facilitators and business partners shoulder the load during live sessions, but learner questions and uncertainty show up after the session ends. Not everyone feels comfortable asking questions live, and it\'s hard to gauge where people are still stuck.',
    devlearnInsight: 'A growing number of platforms include "Chat Tutor" functionality: a conversational assistant built into the course that explains concepts, asks questions, and coaches learners in real time.',
    examples: [
      'After a scenario, learners type or speak what they\'d do; Chat Tutor gives feedback and suggests better alternatives.',
      'Include an "Ask the Tutor" entry point inside modules so learners can clarify concepts privately.',
      'Use Chat Tutor to run quick formative checks: "Want to try a quick scenario?"',
      'Review aggregated questions to see which topics are confusing and need support from facilitators or updated content.',
    ],
    callToAction: 'This is where our Tech Lab: Tutor Chatbot comes in. We can prototype our own version, powered by OpenAI and grounded in our existing modules.',
    color: '#007178',
  },
  {
    id: 'lms-team',
    icon: Award,
    title: 'LMS Team',
    subtitle: 'Mentorship & Development Pathways',
    headline: 'Make career development and mentorship a structured, trackable experience.',
    challenge: 'We know people want mentorship and clear growth paths, but organizing and maintaining those programs manually is time-consuming and inconsistent across teams.',
    devlearnInsight: 'Tools like Absorb\'s "Together" add a layer on top of the LMS to manage mentor–mentee matching, journeys, and tracking.',
    examples: [
      'Pilot a mentorship track for a specific group (e.g., "New Instructional Designers" or "Emerging Leaders").',
      'Match mentors and mentees based on skills, interests, and development goals.',
      'Design a simple journey: intro → shadowing → practice → feedback → reflection.',
      'Track engagement and completion inside the LMS instead of managing everything in spreadsheets and email.',
    ],
    color: '#00ae9a',
  },
];

export function ImpactAreas() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-slate-900 mb-4">Impact Areas</h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Four strategic areas where DevLearn insights translate into concrete actions for our teams
          </p>
        </motion.div>

        <div className="space-y-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.section
                key={area.id}
                id={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <Card className="p-8 border-2" style={{ borderColor: `${area.color}40` }}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${area.color}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: area.color }} />
                    </div>
                    <div>
                      <h2 className="text-slate-900 mb-1">{area.title}</h2>
                      <p className="text-slate-600">{area.subtitle}</p>
                    </div>
                  </div>

                  {/* Headline */}
                  <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: `${area.color}10` }}>
                    <p className="text-slate-900 text-lg">{area.headline}</p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="text-slate-900 mb-2">Challenge / Need</h3>
                    <p className="text-slate-700">{area.challenge}</p>
                  </div>

                  {/* DevLearn Insight */}
                  <div className="mb-6">
                    <h3 className="text-slate-900 mb-2">What DevLearn Showed Us</h3>
                    <p className="text-slate-700 mb-3">{area.devlearnInsight}</p>
                    {area.tools && (
                      <div className="flex flex-wrap gap-2">
                        {area.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-sm border"
                            style={{ 
                              backgroundColor: `${area.color}10`,
                              borderColor: `${area.color}30`,
                              color: area.color 
                            }}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actionable Examples */}
                  <div className="mb-6">
                    <h3 className="text-slate-900 mb-3">
                      {area.plannedActions ? 'Actionable Examples' : 'Actionable Examples'}
                    </h3>
                    <ul className="space-y-2">
                      {area.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: area.color }} />
                          <span className="text-slate-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Planned Actions */}
                  {area.plannedActions && (
                    <div className="mb-6">
                      <h3 className="text-slate-900 mb-3">Planned Actions</h3>
                      <p className="text-slate-700 mb-2">Host short internal sessions to:</p>
                      <ul className="space-y-2">
                        {area.plannedActions.map((action, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: area.color }} />
                            <span className="text-slate-700">{action}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Call to Action or Next Move */}
                  {(area.callToAction || area.nextMove) && (
                    <div className="p-4 rounded-lg border-2" style={{ 
                      backgroundColor: `${area.color}05`,
                      borderColor: `${area.color}30`
                    }}>
                      <p className="text-slate-700">
                        {area.callToAction || area.nextMove}
                      </p>
                    </div>
                  )}
                </Card>
              </motion.section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
