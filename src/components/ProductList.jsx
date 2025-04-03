import React from 'react';
import Product from './Product';
import './App.css';

const products = [
  {
    name: 'slice pizza',
    ingredians: 'Fish,cheese,lettuce,mayo,onions,halaponis,pickcles,atay,oreo',
    rating: '★★★★☆ 87',
    price: '$10.90',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1110,c_fill',
  },
  {
    name: 'FISH OVER RICE',
    ingredians: 'Fish,cheese,lettuce,mayo,onions,halaponis,pickcles,atay,oreo',
    rating: '★★★★☆ 87',
    price: '$20.95',
    image: 'https://www.summahealth.org/-/media/project/summahealth/website/page-content/flourish/2_18a_fl_fastfood_400x400.webp?la=en&h=400&w=400&hash=145DC0CF6234A159261389F18A36742A',
  },
  {
    name: '6-Piece Nonstick, Carbon Steel Oven Bakeware Set',
    ingredians: 'Fish,cheese,lettuce,mayo,onions,halaponis,pickcles,atay,oreo',
    rating: '★★★★☆ 175',
    price: '$34.99',
    image: 'https://blog.amigofoods.com/wp-content/uploads/2020/12/tacos-authentic-mexican-food.jpg',
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;