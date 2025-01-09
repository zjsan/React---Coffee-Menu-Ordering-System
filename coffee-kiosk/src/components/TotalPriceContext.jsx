import React, { createContext, useContext, useState } from 'react';

const TotalPriceContext = createContext();

export const useTotalPrice = () => useContext(TotalPriceContext);

export const TotalPriceProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {children}
    </TotalPriceContext.Provider>
  );
};
