import { motion } from 'motion/react';
import { Bot, ArrowRight, Gamepad2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface TechLabTutorProps {
  onNavigate: (page: 'home' | 'techlab' | 'chat') => void;
}

export function TechLabTutor({ onNavigate }: TechLabTutorProps) {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-[#007178]/10 px-4 py-2 rounded-full mb-6">
            <Bot className="w-5 h-5 text-[#007178]" />
            <span className="text-[#007178]">Tech Lab</span>
          </div>

          <h1 className="text-slate-900 mb-4">DevLearn Prototypes</h1>
          <p className="text-slate-600 text-xl max-w-3xl mx-auto">
            Two working prototypes from our DevLearn insights: conversational tutoring for facilitators and gamified micro-learning for instructional designers.
          </p>
        </motion.div>

        {/* Two Prototypes */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          {/* Tutor Chatbot */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="p-8 h-full border-2 border-[#007178]/30 hover:border-[#007178]/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#007178]/10">
                  <Bot className="w-6 h-6 text-[#007178]" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">Tutor Chatbot</h3>
                  <p className="text-sm text-slate-600">For Facilitators & Business Partners</p>
                </div>
              </div>

              <p className="text-slate-700 mb-6">
                A conversational assistant grounded in our training modules. Ask questions, practice scenarios, and get real-time coaching—all based on approved content.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#007178] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Answers questions across wide content ranges</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#007178] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Reduces "what do I do if..." questions to facilitators</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#007178] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Currently loaded: HIPAA Compliance Training</span>
                </li>
              </ul>

              <Button
                className="w-full bg-[#007178] hover:bg-[#00ae9a]"
                onClick={() => onNavigate('chat')}
              >
                Try Chat Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </motion.div>

          {/* Tetris PWO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full border-2 border-[#00ae9a]/30 hover:border-[#00ae9a]/50 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#00ae9a]/10">
                  <Gamepad2 className="w-6 h-6 text-[#00ae9a]" />
                </div>
                <div>
                  <h3 className="text-slate-900 mb-1">HIPAA Tetris PWO</h3>
                  <p className="text-sm text-slate-600">For Instructional Designers</p>
                </div>
              </div>

              <p className="text-slate-700 mb-6">
                A gamified Portable Web Object that turns HIPAA compliance training into an engaging Tetris-style game. Reskinnable and easily integrated into Storyline.
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#00ae9a] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Content driven by simple CSV files</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#00ae9a] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Reusable across multiple training modules</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-slate-700">
                  <div className="w-1.5 h-1.5 bg-[#00ae9a] rounded-full mt-1.5 flex-shrink-0" />
                  <span>Scalable micro-learning without custom builds</span>
                </li>
              </ul>

              <Button
                className="w-full bg-[#00ae9a] hover:bg-[#007178]"
                onClick={() => window.open('/tetris/index.html', '_blank')}
              >
                Play Tetris Demo
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}