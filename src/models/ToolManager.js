// src/models/ToolManager.js
class ToolManager {
    constructor(tools) {
        this.tools = tools.map(tool => ({
          ...tool,
          isFavorite: this.loadFavorites().some(fav => fav.id === tool.id), // 设置初始收藏状态
        }));
        this.favorites = this.loadFavorites();
      }
      
  
    loadFavorites() {
      return JSON.parse(localStorage.getItem('favorites')) || [];
    }
  
    saveFavorites() {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  
    toggleFavorite(toolId) {
        const toolIndex = this.favorites.findIndex(tool => tool.id === toolId);
        const toolToUpdate = this.tools.find(tool => tool.id === toolId);
      
        if (toolIndex > -1) {
          this.favorites.splice(toolIndex, 1); // 取消收藏
          toolToUpdate.isFavorite = false; // 更新工具的状态
        } else {
          this.favorites.push(toolToUpdate); // 添加收藏
          toolToUpdate.isFavorite = true; // 更新工具的状态
        }
      
        this.saveFavorites();
      }
      
  
    filterByCategory(selectedCategory) {
      if (selectedCategory === '全部') return this.tools;
      return this.tools.filter(tool => tool.category === selectedCategory);
    }
  
    filterByTags(selectedTags) {
      return this.tools.filter(tool =>
        selectedTags.length === 0 || tool.tags.some(tag => selectedTags.includes(tag))
      );
    }
  }
  
  export default ToolManager;
  