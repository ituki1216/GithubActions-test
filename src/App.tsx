import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import UserAccount from './components/UserAccount';
import SearchBar from './components/SearchBar';
import FilterSort from './components/FilterSort';

const App: React.FC = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 29.99, imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 19.99, imageUrl: '/images/product2.jpg' },
    // 追加の商品
  ]);

  export default App;
