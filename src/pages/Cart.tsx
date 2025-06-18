
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(cart);
  }, []);

  const updateCart = (newCart: CartItem[]) => {
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    // Dispatch custom event to update header cart count
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const updateQuantity = (id: string, change: number) => {
    const newCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(0, item.quantity + change);
        return newQuantity === 0 ? null : { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(Boolean) as CartItem[];
    
    updateCart(newCart);
  };

  const removeItem = (id: string) => {
    const newCart = cartItems.filter(item => item.id !== id);
    updateCart(newCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-hero-gradient">
        <div className="section-container pt-32 pb-16">
          <div className="text-center">
            <div className="glass rounded-3xl p-16 max-w-2xl mx-auto">
              <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-slate-400" />
              <h1 className="heading-lg mb-4">Your Cart is Empty</h1>
              <p className="text-body mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Link to="/products" className="btn-modern btn-primary">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero-gradient">
      <div className="section-container pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg mb-8 text-center">Shopping Cart</h1>
          
          <div className="glass rounded-3xl p-8 mb-8">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-6 p-6 bg-white/50 rounded-2xl">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-blue-600" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-slate-800">{item.name}</h3>
                    <p className="text-emerald-600 font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10 h-10 rounded-xl bg-slate-200 hover:bg-slate-300 flex items-center justify-center transition-colors duration-200"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    
                    <span className="w-12 text-center font-semibold">{item.quantity}</span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass rounded-3xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Total: ${getTotalPrice().toFixed(2)}</h3>
              <div className="flex gap-4">
                <Link to="/products" className="btn-modern btn-outline">
                  Continue Shopping
                </Link>
                <button className="btn-modern btn-primary">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
