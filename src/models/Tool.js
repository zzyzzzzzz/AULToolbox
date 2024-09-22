// models/Tool.js
class Tool {
    constructor(id, name, category, tags, description, link, image) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.tags = tags;
      this.description = description;
      this.link = link;
      this.image = image;
      this.isFavorite = false; // 默认不收藏
    }
  
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    }
  }
  
  export default Tool;
  