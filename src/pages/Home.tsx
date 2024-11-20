import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import { tools } from '../data/tools';
import CategoryFilter from '../components/CategoryFilter';
import NewsletterForm from '../components/NewsletterForm';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">AI Tools Directory</h1>
          </div>
          <p className="text-center text-xl text-indigo-100 max-w-2xl mx-auto">
            Discover the best AI tools to enhance your workflow and boost productivity
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-8 relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search AI tools..."
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {/* Featured Tools Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose AI Tools?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Boost Productivity</h3>
              <p className="text-gray-600">Automate repetitive tasks and focus on what matters most with AI-powered solutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Enhanced Creativity</h3>
              <p className="text-gray-600">Generate fresh ideas and explore new possibilities with AI assistance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Stay Competitive</h3>
              <p className="text-gray-600">Keep up with the latest technology trends and maintain a competitive edge.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Newsletter Section */}
      <NewsletterForm />
    </>
  );
}

export default Home;