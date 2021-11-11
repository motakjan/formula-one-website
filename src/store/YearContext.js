import React, { useContext, useState, createContext } from "react";

// Initial Values to Help IDE
export const YearContext = createContext({});

export function useYear() {
  return useContext(YearContext);
}

export const YearContextProvider = (props) => {
  const [year, setYear] = useState(2021);
  // Context Values
  const contextValue = {
    year,
    setYear,
  };

  return (
    <YearContext.Provider value={contextValue}>
      {props.children}
    </YearContext.Provider>
  );
};
