import React, { createContext, useState } from "react";

export const TitleContext = createContext();

const Titleprovider = ({ children }) => {
  const [title, setTitle] = useState("");
  return (
    <TitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};

export default Titleprovider;