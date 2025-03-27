import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { getCurrentUser } from "../lib/appwrite";
import { Models } from "react-native-appwrite";
import { errorReturn } from "../lib/errorReturn";

interface GlobalContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: Models.Document | null;
  setUser: React.Dispatch<React.SetStateAction<Models.Document | null>>;
  
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<Models.Document | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setUser(res);
        } else {
          setIsLoggedIn(false);
          setUser(null);
        }
      })
      .catch((error) => {
        errorReturn(error);
      })
      .finally(() => {
        setIsLoading(false)
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        setIsLoading,
        user,
        setUser,
        setIsLoggedIn
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
