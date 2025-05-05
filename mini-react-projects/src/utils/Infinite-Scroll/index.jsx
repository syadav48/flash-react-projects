// src/components/InfiniteScroll.js
import { useState, useEffect, useCallback } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    // Simulate API call with timeout
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Generate 10 new items
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: (page - 1) * 10 + i + 1,
      title: `Item ${(page - 1) * 10 + i + 1}`,
      content: `This is the content for item ${(page - 1) * 10 + i + 1}`,
      date: new Date().toLocaleDateString()
    }));
    
    setItems(prev => [...prev, ...newItems]);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !== 
        document.documentElement.offsetHeight || 
        loading
      ) return;
      
      setPage(prev => prev + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Infinite Scroll Demo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map(item => (
          <div 
            key={item.id} 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
            <p className="text-gray-600 mb-3">{item.content}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center my-8">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;