import PropTypes from "prop-types";
import { auth } from "@/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState, useContext } from "react";

export const authContext = createContext();
export const useAuth = () => {
  return useContext(authContext);
};

// Functions
function AuthContextProvider({ children }) {
  const [loginLoading, setLoginLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoginLoading(false);
    });

    return unsub;
  }, []);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    signOut(auth).then(() => {
      setCurrentUser(false);
    });
  }

  return (
    <authContext.Provider value={{ login, logout, currentUser, register, confirmationResult, setConfirmationResult}}>
      {loginLoading ? (
        <div className="w-full h-[100vh] text-3xl flex justify-center items-center animation-spin">
          ⟳
        </div>
      ) : (
        children
      )}
    </authContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
