import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Order {
  customerName: string;
  city: string;
  phone: string;
  quantity: number;
  plan: string;
  timestamp: Date;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, 'timestamp'>) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (order: Omit<Order, 'timestamp'>) => {
    const newOrder = { ...order, timestamp: new Date() };
    setOrders((prev) => [...prev, newOrder]);
    console.log('Order added:', newOrder);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};