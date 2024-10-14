import React, { createContext, useEffect, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 301; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const fetchItems = async () => {
    try {
      const res = await fetch('http://localhost:4000/product/getallproducts');
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      console.log('API Response:', data);

      if (data.success && Array.isArray(data.data)) {
        setAllProducts(data.data);
      } else {
        console.error('Unexpected API response format:', data);
        setAllProducts([]);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchItems();

    // Fetch cart data if user is logged in
    const fetchCartData = async () => {
      if (localStorage.getItem('auth-token')) {
        try {
          const res = await fetch('http://localhost:4000/product/getcartdata', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('auth-token'),
            }
          });

          if (!res.ok) {
            throw new Error('Failed to fetch cart data');
          }

          const data = await res.json();
          console.log('Fetched cart data:', data);

          if (data.success && data.cartdata) {
            setCartItems(data.cartdata); // Assuming the API returns cartItems object
          } else {
            console.error('Unexpected cart data format:', data);
          }
        } catch (error) {
          console.error('Error fetching cart data:', error);
        }
      }
    };

    fetchCartData();
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/product/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error adding to cart:', error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/product/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error removing from cart:', error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = allproducts.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalitems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalitems += cartItems[item];
      }
    }
    return totalitems;
  };

  const ContextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    allproducts,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
