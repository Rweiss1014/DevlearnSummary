import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { TechLabTutor } from './components/TechLabTutor';
import { ChatbotTutor } from './components/ChatbotTutor';
import { ChatPage } from './components/ChatPage';
import { TetrisPage } from './components/TetrisPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'techlab' | 'chat' | 'tetris'>('home');

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
      {currentPage === 'techlab' && <TechLabTutor onNavigate={setCurrentPage} />}
      {currentPage === 'chat' && <ChatPage />}
      {currentPage === 'tetris' && <TetrisPage onNavigate={setCurrentPage} />}

      <ChatbotTutor />
    </div>
  );
}