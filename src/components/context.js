import React, { createContext, useState } from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const contextValue = {data, setData};

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
} 



