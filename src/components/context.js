import React, { createContext, useState } from 'react';

export const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState(null);
  const contextValue = {city, setCity};

  return (
    <CityContext.Provider value={contextValue}>
      {children}
    </CityContext.Provider>
  );
} 



