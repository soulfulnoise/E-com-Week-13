// Importing Models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Products belongs to Catergory
Product.belongsTo( Category,{
    foreignKey:'category_id',
});

//Categories have many Products
Category.hasMany(Product,{
    foreignKey:'category_id',
});

//Products belongToMany tags(through ProductTag)
Product.belongsTo(ProductTag,{
    through:ProductTag,
    foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
TimeRanges.hasMany(ProductTag, {
    through:ProductTag,
   foreignKey: 'tag_id',
});

module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };

