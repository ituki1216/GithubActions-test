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

  
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com', address: '123 Main St' });

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = (formData) => {
    console.log('Checkout data:', formData);
    // チェックアウト処理を実行
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
  };
  
return (
    <Router>
      <div className="app">
        <h1>EC Site</h1>
        <SearchBar onSearch={(query) => console.log('Search:', query)} />
        <Switch>
          <Route path="/" exact>
            <ProductList products={products} onAddToCart={addToCart} />
          </Route>
          <Route path="/cart">
            <Cart items={cartItems} onRemove={removeFromCart} onCheckout={handleCheckout} />
          </Route>
          <Route path="/checkout">
            <Checkout onCheckout={handleCheckout} />
          </Route>
          <Route path="/account">
            <UserAccount user={user} onUpdate={updateUser} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
