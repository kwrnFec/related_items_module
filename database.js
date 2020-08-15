const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/products', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = {
  category: String,
  default_price: Number,
  description: String,
  features: Array,
  id: String,
  name: String,
  photo: String,
  slogan: String,
};
const Product = mongoose.model('Product', productSchema);

// Product.create({
//   category: 'Accessories',
//   default_price: '69',
//   description: 'Where you\'re going you might not need roads,
//   but you definitely need some shades. Give those baby blues a rest
//   and let the future shine bright on these timeless lenses.',
//   features: [
//     { feature: 'Lenses', value: 'Ultrasheen' },
//     { feature: 'UV Protection', value: 'No' },
//     { feature: 'Frames', value: 'LightCompose' },
//   ],
//   id: 2,
//   name: 'Bright Future Sunglasses',
//   photo: 'https://www.ukmodels.co.uk/wp-content/uploads/2017/11/model-agency.jpg',
//   slogan: 'You\'ve got to wear shades',
// }, (err) => {
//   if (err) return err;
//   return Product;
//   // saved!
// });

module.exports = Product;
