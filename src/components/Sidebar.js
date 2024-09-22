import React from 'react';
import '../styles/Sidebar.css';

function Sidebar({ selectedCategory, setSelectedCategory, selectedTags, setSelectedTags }) {
  const categories = ['全部', '意向素材', '资源商城', '规范资料', '设计作品', '学术报告', '植物设计', '软件下载'];
  const tags = ['国内', '国外','景观',
    '建筑','规划' 
  ];

  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag)); // 取消选择
    } else {
      setSelectedTags([...selectedTags, tag]); // 添加选择
    }
  };

  return (
    <div className="sidebar">
      {/* 筛选 Tag 区域 */}
      <div className="tag-filter">
        <label>筛选标签：</label>
        {tags.map((tag) => (
          <div key={tag}>
            <input
              type="checkbox"
              id={tag}
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagChange(tag)}
            />
            <label htmlFor={tag}>{tag}</label>
          </div>
        ))}
      </div>

      {/* 分类区域 */}
      <div className="categories">
        <h3>分类</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;