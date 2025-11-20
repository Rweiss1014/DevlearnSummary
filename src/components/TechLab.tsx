import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Filter, Heart, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ToolCard } from './ToolCard';
import { tools, categories } from '../data/techLabTools';

export function TechLab() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const saved = localStorage.getItem('assistrx-tool-wishlist');
    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  const toggleWishlist = (toolName: string) => {
    const newWishlist = wishlist.includes(toolName)
      ? wishlist.filter(name => name !== toolName)
      : [...wishlist, toolName];
    
    setWishlist(newWishlist);
    localStorage.setItem('assistrx-tool-wishlist', JSON.stringify(newWishlist));
  };

  const filteredTools = selectedCategory === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === selectedCategory);

  return (
    <section id="techlab" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-slate-900 mb-4">Tech Lab</h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-6">
            High-impact L&D tools from DevLearn 2025 and widely adopted by modern teams. 
            Real-world use cases, practical pricing, and fit for AssistRx.
          </p>

          {wishlist.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-[#ade2e3] text-[#007178] px-4 py-2 rounded-lg">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm">{wishlist.length} tool{wishlist.length !== 1 ? 's' : ''} in wishlist</span>
            </div>
          )}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-[#007178]" />
            <h3 className="text-slate-900">Filter by Category</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() => setSelectedCategory('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              className={selectedCategory === 'all' ? 'bg-[#007178] hover:bg-[#00ae9a]' : ''}
            >
              All Tools
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={selectedCategory === category.id ? 'bg-[#007178] hover:bg-[#00ae9a]' : ''}
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categoryTools = filteredTools.filter(tool => tool.category === category.id);
            
            if (categoryTools.length === 0) return null;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <h2 className="text-slate-900 mb-2">
                    {category.icon} {category.name}
                  </h2>
                  <p className="text-slate-600">{category.description}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {categoryTools.map((tool, index) => (
                    <ToolCard
                      key={tool.name}
                      tool={tool}
                      isWishlisted={wishlist.includes(tool.name)}
                      onToggleWishlist={() => toggleWishlist(tool.name)}
                      delay={index * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No tools found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
