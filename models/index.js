// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Categories have many Products
// Products belongsTo Category
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'aaa',
  foreignKey: 'product_id'
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'aaa',
  foreignKey: 'tag_id'
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
