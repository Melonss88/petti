import { useState, useEffect } from "react";
import productInfos from "@/pages/hmall/config/products";

const CART_KEY = "cartItems";

const useCarts = () => {
    const [cartItemIds, setCartItemIds] = useState<{ id: string; quantity: number; size: string; checked: boolean }[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem(CART_KEY);
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          setCartItemIds(
            parsedCart.map((item: any) => ({
              ...item,
              checked: item.checked !== undefined ? item.checked : true // 默认为true以保持现有行为
            }))
          );
        }
    }, []);

    const cartItems = cartItemIds.map(({ id, quantity, size, checked }) => {
        const product = productInfos().find((p) => p.id === id);
        if (!product) return null;
        return {
          id,
          name: product.title,
          imgUrl: product.imgUrl,
          price: Number(product.price.replace("￥", "")),
          quantity,
          checked, 
          size,
        };
    }).filter(Boolean);
    

  const saveCart = (updatedCart: any) => {
    setCartItemIds(updatedCart);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  };

  const addToCart = (id: string, size:string) => {
    if (!cartItemIds.find((item) => item.id === id)) {
      saveCart([...cartItemIds, { id, quantity: 1, size:size }]);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    saveCart(cartItemIds.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const toggleItemCheck = (id: string) => {
    saveCart(
      cartItemIds.map((item) => 
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id: string) => {
    saveCart(cartItemIds.filter((item) => item.id !== id));
  };

  const removeItems = (ids: string[]) => {
    saveCart(cartItemIds.filter(item => !ids.includes(item.id)));
  };

  const toggleAllCheck = (checked: boolean) => {
    saveCart(cartItemIds.map(item => ({ ...item, checked })));
  };

  return { cartItems, addToCart, updateQuantity, toggleItemCheck, removeItem, removeItems, toggleAllCheck };
};

export default useCarts;
