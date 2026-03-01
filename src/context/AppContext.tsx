import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Bouquet, BasketItem, User } from '../types';



interface AppContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  basket: BasketItem[];
  addToBasket: (item: Bouquet) => void;
  removeFromBasket: (id: number) => void;
  updateQuantity: (id: number, delta: number) => void;
  clearBasket: () => void;
  basketCount: number;
  basketTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  const setUser = (newUser: User | null) => {
    setUserState(newUser);
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
      setIsLoggedIn(true);
    } else {
      localStorage.removeItem('user');
      setIsLoggedIn(false);
    }
  };

  const [basket, setBasket] = useState<BasketItem[]>(() => {
    const saved = localStorage.getItem('basket');
    return saved ? JSON.parse(saved) : [];
  });

  const addToBasket = (item: Bouquet) => {
    setBasket((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromBasket = (id: number) => {
    setBasket((prev) => prev.filter((i) => i.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
    localStorage.removeItem('basket');
  };

  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      localStorage.removeItem('basket');
    }
  }, [basket]);

  const updateQuantity = (id: number, delta: number) => {
    setBasket((prev) =>
      prev.map((i) => {
        if (i.id === id) {
          const newQuantity = i.quantity + delta;
          return { ...i, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return i;
      })
    );
  };

  const basketCount = basket.reduce((sum, item) => sum + item.quantity, 0);
  const basketTotal = basket.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        updateQuantity,
        basketCount,
        basketTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
