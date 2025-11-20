import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/41d3549c7d8ccb2ea85d0c048ae6e5da0d546a65.png';

interface NavigationProps {
  currentPage: 'home' | 'techlab';
  onNavigate: (page: 'home' | 'techlab') => void;
}

const navItems = [
  { id: 'home' as const, label: 'Home' },
  { id: 'techlab' as const, label: 'Tech Lab: Tutor Chatbot' },
];

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: typeof currentPage) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-baseline gap-3">
            <img src={logo} alt="AssistRx" className="h-6" />
            <span className="text-slate-600 text-xl">DevLearn 2025 <span className="text-[#007178]">→ From Ideas to Systems</span></span>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all ${
                  currentPage === item.id
                    ? 'bg-[#ade2e3] text-[#007178]'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    currentPage === item.id
                      ? 'bg-[#ade2e3] text-[#007178]'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}