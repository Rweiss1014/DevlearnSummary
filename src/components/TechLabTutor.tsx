import { motion } from 'motion/react';
import { Bot, ArrowRight } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { PDFUpload } from './PDFUpload';

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
          
          <h1 className="text-slate-900 mb-4">Tutor Chatbot</h1>
          <p className="text-slate-600 text-xl mb-6 max-w-3xl mx-auto">
            A chatbot tutor that answers questions and coaches users based on the exact module content we upload.
          </p>
          <p className="text-slate-700 max-w-3xl mx-auto mb-8">
            Instead of facilitators and business managers sifting through a module, the Tutor Chatbot gives them a quick way to get answers across a wide range of content. They can talk to it, ask questions, practice decisions, and get feedback in real time. It stays grounded in our own content and rules, so it remains accurate and aligned with how we train.
          </p>
          
          <Button
            size="lg"
            className="bg-[#007178] hover:bg-[#00ae9a]"
            onClick={() => onNavigate('chat')}
          >
            Try Chat Demo
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* PDF Upload */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <PDFUpload />
        </motion.div>

        {/* Pilot Concept */}
        <motion.section
          id="pilot-concept"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="scroll-mt-24"
        >
          <h2 className="text-slate-900 mb-6">Pilot Concept</h2>
          <Card className="p-8 bg-gradient-to-br from-[#007178]/5 to-[#00ae9a]/5 border-2 border-[#007178]/30">
            <div className="space-y-6">
              {/* What It Is */}
              <div>
                <h3 className="text-slate-900 mb-3">What It Is</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#007178] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">A chatbot tied to a specific course or module.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#007178] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">We upload the module content in the backend.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#007178] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">Users access the Tutor from inside a host site, such as Caliber.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#007178] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">The Tutor only answers using the approved content and guardrails we set.</span>
                  </li>
                </ul>
              </div>

              {/* Goals */}
              <div>
                <h3 className="text-slate-900 mb-2">Goals</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00ae9a] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">Support facilitators and business partners across a wide array of content.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00ae9a] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">Reduce repeated "what do I do if…" questions to facilitators.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#00ae9a] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700">Gather useful analytics on where content is confusing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}