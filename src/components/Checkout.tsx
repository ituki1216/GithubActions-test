import React, { useState } from 'react';

interface CheckoutProps {
  onCheckout: (formData: FormData) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onCheckout }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, address, paymentMethod };
    onCheckout(formData);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank">Bank Transfer</option>
            </select>
          </label>
        </div>
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
