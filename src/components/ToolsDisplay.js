import React, { useEffect, useState } from 'react';
import '../styles/ToolsDisplay.css';

function ToolsDisplay({ selectedCategory, selectedTags }) {
  const [tools, setTools] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/data/toolsData.json')
      .then((response) => response.json())
      .then((data) => setTools(data))
      .catch((error) => console.error('数据加载失败:', error));
  }, []);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const filteredTools = tools.filter((tool) => {
    const categoryMatch = selectedCategory === '全部' || tool.category === selectedCategory;
    const tagMatch = selectedTags.length === 0 || tool.tags.some(tag => selectedTags.includes(tag));
    return categoryMatch && tagMatch;
  });

  const toggleFavorite = (tool) => {
    let updatedFavorites = favorites.find(fav => fav.id === tool.id)
      ? favorites.filter(fav => fav.id !== tool.id)
      : [...favorites, tool];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="tools-display">
      <div className="favorites">
        <h3>收藏夹</h3>
        {favorites.length > 0 ? (
          <div className="favorites-list">
            {favorites.map((tool) => (
              <div key={tool.id} className="favorite-item">
                <span className="bullet">&#8226;</span>
                <a href={tool.link} target="_blank" rel="noopener noreferrer">
                  {tool.name}
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>暂无收藏的工具。</p>
        )}
      </div>

      <div className="tools-list">
        <h3>{selectedCategory} - 工具列表</h3>
        <div className="tools-grid">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="tool-card" onClick={() => window.open(tool.link, '_blank')}>
              <div className="tool-image">
                <img src={tool.image} alt={tool.name} />
              </div>
              <h4>{tool.name}</h4>
              <p>{tool.description}</p>
              <div className="tool-tags">
                {tool.tags.map(tag => (
                  <span key={tag} className="tool-tag">{tag}</span>
                ))}
              </div>
              <button onClick={(e) => { e.stopPropagation(); toggleFavorite(tool); }}>
                {favorites.find(fav => fav.id === tool.id) ? '取消收藏' : '收藏'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToolsDisplay;