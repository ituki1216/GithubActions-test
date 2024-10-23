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
  return (
    <div>
      <Header />
      <SearchBar />
      <FilterSort />
      <ProductList />
      {/* 必要に応じて、特定のページに応じたコンポーネントを表示 */}
      {/* 例えば、<ProductDetail /> や <Cart /> など */}
      <Footer />
    </div>
  );

  export default App;
