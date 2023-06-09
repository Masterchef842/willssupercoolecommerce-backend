// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: {name: 'category_id'}
})
// Categories have many Products
Category.hasMany(Product, {
foreignKey: {name: 'category_id'}
})


// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: {model: ProductTag},
  //foreignKey: {name: 'product_id'}
})


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: {model: ProductTag},
  //foreignKey: {name: 'tag_id'}
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
