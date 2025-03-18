import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_Id: 0,
    user_name: "Guest",
    user_email: "guest@finomics.com.pk",
  });

  return (
    <StoreContext.Provider value={{ user, setUser }}>
      {children}
    </StoreContext.Provider>
  );
};
