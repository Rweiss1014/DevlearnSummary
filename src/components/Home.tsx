import { motion } from 'motion/react';
import { ArrowRight, Users, Lightbulb, MessageSquare, Award, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface HomeProps {
  onNavigate: (page: 'techlab') => void;
}

const impactAreas = [
  {
    id: 'ld-whole',
    icon: Users,
    title: 'L&D as a Whole',
    description: 'How can we reduce the "work about the work"?',
    details: 'Automate meeting notes → tasks → project tracking. Use tools we already have: Teams, Copilot, Power Automate, SmartSheet',
    color: '#007178',
  },
  {
    id: 'instructional-designers',
    icon: Lightbulb,
    title: 'Instructional Designers',
    description: 'How can we scale engaging training without scaling effort?',
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
    description: 'How can we extend support beyond the live session?',
    subtitle: 'Always-On Chat Tutor',
    headline: 'Extend facilitation with an in-course conversational tutor.',
    challenge: 'Facilitators and business partners shoulder the load during live sessions, but learner questions and uncertainty show up after the session ends. Not everyone feels comfortable asking questions live, and it\'s hard to gauge where people are still stuck.',
    devlearnInsight: 'A growing number of platforms include "Chat Tutor" functionality: a conversational assistant built into the course that explains concepts, asks questions, and coaches learners in real time.',
    examples: [
      'After a scenario, facilitators can type or speak how they\'d coach it; Chat Tutor gives targeted feedback and suggests stronger alternatives.',
      'They can embed an "Ask the Tutor" entry point inside modules so participants can clarify concepts privately, giving facilitators visibility into where people are getting stuck.',
      'Chat Tutor can also run quick formative checks—"Want to try a quick scenario?"—so facilitators get real-time insight into how well the group is tracking.',
      'On the back end, facilitators can review aggregated questions to spot patterns, confusion points, and areas where content or coaching needs to be tightened.',
    ],
    callToAction: 'This is where our Tech Lab: TutorBot comes in.',
    color: '#007178',
  },
  {
    id: 'lms-team',
    icon: Award,
    title: 'LMS Team',
    description: 'How can we make mentorship scalable and trackable?',
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

const impactAreasDetailed = [
  {
    id: 'ld-whole',
    icon: Users,
    title: 'L&D as a Whole',
    subtitle: 'Automating the Work About the Work',
    headline: 'Automate the admin so we can focus on impact.',
    challenge: 'Right now, meeting notes, actions, and project updates live in different places. We spend a lot of time retyping decisions into trackers, chasing "who owns what," and manually updating statuses.',
    devlearnInsight: 'Teams are using automation to take meeting outputs and turn them directly into trackable work. The good news: we don\'t need new platforms to start this. We already have:',
    tools: ['Teams transcription', 'Copilot', 'Power Automate', 'SmartSheet'],
    examples: [
      'Auto-create SmartSheet tasks from Teams meeting transcripts.',
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
    challenge: 'Facilitators and business managers carry the responsibility of answering questions during class and again long after a session ends. Learners often hesitate to speak up, and managers get asked to clarify content they didn\'t build. Both groups need a reliable, on-demand way to get accurate explanations, better coaching language, and quick scenario support without digging through decks.',
    devlearnInsight: 'More organizations are adopting external "Chat Tutor" tools—separate sites that support facilitators and leaders with real-time explanations, scenario walkthroughs, and coaching guidance.',
    examples: [
      'Facilitators can type how they\'d coach or explain a scenario, and Chat Tutor returns clearer language, stronger alternatives, and suggested framing they can use right away—whether they\'re in the middle of a session or preparing for one.',
      'During class, they can keep the site open on a second screen to quickly check details, clarify workflows, or generate examples without slowing the room down.',
      'Business Partners can use it whenever they\'re asked content-specific questions, giving them confident, consistent answers without guessing.',
      'Afterwards, facilitators and leaders can review the types of questions the Tutor receives to spot patterns and identify where content or coaching needs tightening.',
    ],
    callToAction: 'This is where our Tech Lab: TutorBot comes in.',
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

const roadmapItems = [
  'Explore Power Automate + SmartSheet for meeting → task automation.',
  'Pilot PWO skill-up sessions and embed into global modules.',
  'Define and launch the Tutor Chatbot pilot with one module.',
  'Explore mentorship tooling options with LMS/HR stakeholders.',
  'Build standardized templates and playbooks for PWOs, Tutors, and mentorship.',
  'Scale what works; retire what doesn\'t.',
];

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#ade2e3]/30 via-[#007178]/10 to-[#00ae9a]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-slate-900 mb-6">
              DevLearn 2025 → From Ideas to Systems
            </h1>
            <p className="text-slate-600 text-xl mb-8 max-w-3xl mx-auto">
              Turning DevLearn insights into concrete workflows for our L&D ecosystem.
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 mb-8 border border-slate-200 max-w-3xl mx-auto text-left">
              <p className="text-slate-700 mb-4">
                At DevLearn, we focused on four interconnected parts of our learning ecosystem:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-[#007178] rounded-full" />
                  L&D as a whole
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-[#00ae9a] rounded-full" />
                  The Instructional Design team
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-[#007178] rounded-full" />
                  Facilitators & Business Partners
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <div className="w-2 h-2 bg-[#00ae9a] rounded-full" />
                  The LMS team
                </li>
              </ul>
              <p className="text-slate-700">
                Instead of chasing shiny tools, we went in with a clear goal: find ideas that help us <strong>automate work</strong>, <strong>scale good learning</strong>, and <strong>support people where they actually feel the friction</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => {
                  document.getElementById('impact-areas')?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="bg-[#007178] hover:bg-[#00ae9a] group"
              >
                Explore Impact Areas
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => onNavigate('techlab')}
                size="lg"
                variant="outline"
                className="border-[#007178] text-[#007178] hover:bg-[#007178] hover:text-white"
              >
                Visit the Tech Lab
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Impact Areas Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 mb-4">The Four Impact Areas</h2>
            <p className="text-slate-600 text-lg">
              Click any question to explore solutions
            </p>
          </motion.div>

          <div className="space-y-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => {
                  document.getElementById(`${area.id}-detail`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="flex items-start gap-4 sm:gap-6 py-8 px-6 rounded-xl hover:bg-slate-50 transition-colors">
                  <span 
                    className="text-4xl sm:text-5xl md:text-6xl shrink-0"
                    style={{ color: area.color }}
                  >
                    {index + 1}.
                  </span>
                  <h3 
                    className="text-3xl sm:text-4xl md:text-5xl transition-colors duration-300 text-left"
                    style={{ color: area.color }}
                  >
                    {area.description}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section id="impact-areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 mb-4">The Four Impact Areas</h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Four strategic areas where DevLearn insights translate into concrete actions for our teams
            </p>
          </motion.div>

          <div className="space-y-16">
            {impactAreasDetailed.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.id}
                  id={`${area.id}-detail`}
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
                        <h3 className="text-slate-900 mb-1">{area.title}</h3>
                        <p className="text-slate-600">{area.subtitle}</p>
                      </div>
                    </div>

                    {/* Headline */}
                    <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: `${area.color}10` }}>
                      <p className="text-slate-900 text-lg">{area.headline}</p>
                    </div>

                    {/* Challenge */}
                    <div className="mb-6">
                      <h4 className="text-slate-900 font-bold mb-2">Challenge / Need</h4>
                      <p className="text-slate-700">{area.challenge}</p>
                    </div>

                    {/* DevLearn Insight */}
                    <div className="mb-6">
                      <h4 className="text-slate-900 mb-2" style={{ fontWeight: 700 }}>What DevLearn Showed Us</h4>
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
                      <h4 className="text-slate-900 font-bold mb-3">Actionable Examples</h4>
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
                        <h4 className="text-slate-900 font-bold mb-3">Planned Actions</h4>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmap / Next Steps */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-slate-900 mb-4">Roadmap / Next Steps</h2>
            <p className="text-slate-600 text-xl max-w-3xl mx-auto">
              From DevLearn insights to real pilots
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 border-2 border-[#007178]/30">
              <ul className="space-y-4">
                {roadmapItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-[#007178] bg-white">
                      <div className="w-2 h-2 rounded-full bg-[#007178] transition-transform group-hover:scale-150" />
                    </div>
                    <span className="text-slate-700 flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

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
                  We're moving from exploration to execution, starting small, learning fast, and scaling what works. Turning DevLearn ideas into sustainable systems.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}