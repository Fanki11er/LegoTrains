import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { createUserData } from "../firebase/writeToDbFuncions";

export const AuthContext = createContext({
  signUpWithEmailAndPassword: async (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _email: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _password: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _userName: string
  ) => {},
  loginUserAnonymously: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loginUserWithEmailAndPassword: (_email: string, _password: string) => {},
  currentUser: null as User | null,
  authError: "",
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const signUpWithEmailAndPassword = async (
    email: string,
    password: string,
    userName: string
  ) => {
    setAuthError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;
        if (userId) {
          createUserData(userId, userName);
        } else {
          setAuthError("Account not created");
        }
      })
      .catch((err) => {
        setAuthError(err.message);
      });
  };

  const loginUserAnonymously = async () => {
    setAuthError("");
    signInAnonymously(auth).catch((err) => {
      setAuthError(err.message);
    });
  };

  const loginUserWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    setAuthError("");

    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setAuthError(err.message);
    });
  };

  const context = {
    signUpWithEmailAndPassword,
    loginUserWithEmailAndPassword,
    loginUserAnonymously,
    currentUser,
    authError,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
