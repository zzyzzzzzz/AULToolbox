import React, { useState } from 'react';
import './styles/App.css'; 
import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 
import ToolsDisplay from './components/ToolsDisplay'; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedTags, setSelectedTags] = useState([]); // 更新为数组

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          selectedTags={selectedTags} 
          setSelectedTags={setSelectedTags} 
        />
        <ToolsDisplay 
          selectedCategory={selectedCategory} 
          selectedTags={selectedTags} 
        />
      </div>
    </div>
  );
}

export default App;