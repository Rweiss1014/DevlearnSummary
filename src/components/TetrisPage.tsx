import { motion } from 'motion/react';
import { Gamepad2, ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

interface TetrisPageProps {
  onNavigate: (page: 'home' | 'techlab' | 'chat' | 'tetris') => void;
}

export function TetrisPage({ onNavigate }: TetrisPageProps) {
  return (
    <div className="pt-16 pb-8 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-slate-50 to-[#ade2e3]/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <Button
            onClick={() => onNavigate('techlab')}
            variant="outline"
            className="mb-4 border-[#00ae9a] text-[#00ae9a] hover:bg-[#00ae9a] hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tech Lab
          </Button>

          <div className="inline-flex items-center gap-3 bg-[#00ae9a]/10 px-4 py-2 rounded-full mb-4">
            <Gamepad2 className="w-5 h-5 text-[#00ae9a]" />
            <span className="text-[#00ae9a]">HIPAA Tetris PWO</span>
          </div>

          <h1 className="text-slate-900 mb-2">Gamified Micro-Learning Demo</h1>
          <p className="text-slate-600 text-lg">
            A Portable Web Object that turns HIPAA compliance training into an engaging game
          </p>
        </motion.div>

        {/* Tetris Game Iframe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-2xl border-2 border-[#00ae9a]/20"
        >
          <iframe
            src="/tetris/index.html"
            title="HIPAA Tetris Game"
            className="w-full border-0 rounded-xl"
            style={{ height: '800px', minHeight: '600px' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </motion.div>
      </div>
    </div>
  );
}
