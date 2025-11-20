import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ChevronUp, Heart, ExternalLink, DollarSign, CheckCircle2, Lightbulb, Wrench } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface Tool {
  name: string;
  category: string;
  icon: string;
  whatItIs: string;
  whyLDUsesIt: string;
  example: string;
  pricing: string;
  assistRxFit: {
    status: 'yes' | 'maybe' | 'no';
    note: string;
  };
  link?: string;
}

interface ToolCardProps {
  tool: Tool;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
  delay?: number;
}

export function ToolCard({ tool, isWishlisted, onToggleWishlist, delay = 0 }: ToolCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const fitColors = {
    yes: { bg: 'bg-[#00ae9a]/10', text: 'text-[#00ae9a]', border: 'border-[#00ae9a]/30' },
    maybe: { bg: 'bg-[#ffc629]/10', text: 'text-[#093e52]', border: 'border-[#ffc629]/30' },
    no: { bg: 'bg-slate-100', text: 'text-slate-600', border: 'border-slate-300' },
  };

  const colors = fitColors[tool.assistRxFit.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      <Card className="overflow-hidden border-2 border-slate-200 hover:border-[#007178]/30 transition-colors">
        {/* Header - Always Visible */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{tool.icon}</div>
              <div>
                <h3 className="text-slate-900 mb-1">{tool.name}</h3>
                <p className="text-slate-600 text-sm">{tool.whatItIs}</p>
              </div>
            </div>
            
            <button
              onClick={onToggleWishlist}
              className="flex-shrink-0 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart 
                className={`w-5 h-5 transition-colors ${
                  isWishlisted ? 'fill-[#007178] text-[#007178]' : 'text-slate-400'
                }`}
              />
            </button>
          </div>

          {/* AssistRx Fit Badge */}
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm mb-4 ${colors.bg} ${colors.text} border ${colors.border}`}>
            {tool.assistRxFit.status === 'yes' && <CheckCircle2 className="w-4 h-4" />}
            <span>
              AssistRx Fit: {tool.assistRxFit.status === 'yes' ? '✅ Yes' : tool.assistRxFit.status === 'maybe' ? '⚠️ Maybe' : '❌ No'}
            </span>
          </div>

          {/* Expand/Collapse Button */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="w-full justify-between"
          >
            <span>{isExpanded ? 'Show Less' : 'Show Details'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200 bg-slate-50"
          >
            <div className="p-6 space-y-4">
              {/* Why L&D Uses It */}
              <div className="flex gap-3">
                <Lightbulb className="w-5 h-5 text-[#007178] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 text-sm mb-1">Why L&D uses it:</h4>
                  <p className="text-slate-700 text-sm">{tool.whyLDUsesIt}</p>
                </div>
              </div>

              {/* Example Use Case */}
              <div className="flex gap-3">
                <Wrench className="w-5 h-5 text-[#007178] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 text-sm mb-1">Example:</h4>
                  <p className="text-slate-700 text-sm">{tool.example}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex gap-3">
                <DollarSign className="w-5 h-5 text-[#007178] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-slate-900 text-sm mb-1">Pricing:</h4>
                  <p className="text-slate-700 text-sm">{tool.pricing}</p>
                </div>
              </div>

              {/* AssistRx Fit Note */}
              <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                <h4 className={`text-sm mb-1 ${colors.text}`}>AssistRx Fit:</h4>
                <p className="text-slate-700 text-sm">{tool.assistRxFit.note}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <Button
                  onClick={onToggleWishlist}
                  variant={isWishlisted ? 'default' : 'outline'}
                  className={`flex-1 ${isWishlisted ? 'bg-[#007178] hover:bg-[#00ae9a]' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
                </Button>
                
                {tool.link && (
                  <Button
                    variant="outline"
                    onClick={() => window.open(tool.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </Card>
    </motion.div>
  );
}
