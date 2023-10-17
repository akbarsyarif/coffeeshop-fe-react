import { createContext, useContext, useState } from "react";

// generate context
const UserContext = createContext();

// buatkan shortcut untuk penggunaan context
export const useUserContext = () => useContext(UserContext);

// siapkan komponen provider
export const UserProvider = ({ children }) => {
  // sediakan value yang akan di provide
  const [user, setUser] = useState({
    isUserAvailable: false,
  });
  const changeUser = (data) => {
    setUser((user) => ({
      ...user,
      ...data,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
