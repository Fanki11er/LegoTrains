import { createContext, PropsWithChildren, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInAnonymously,
  signInWithEmailAndPassword,
  User,
  UserCredential,
  sendPasswordResetEmail,
  linkWithCredential,
} from "firebase/auth";
import { auth } from "../firebase/config";
import SubmitIndicator from "../Components/Molecules/SubmitIndicator/SubmitIndicator";
import { FullCenterWrapper } from "../Components/Atoms/FullCenterWrapper/FullCenterWrapper.styles";
import { EmailAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext({
  signUpWithEmailAndPassword: (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    new Promise(() => {
      email;
      password;
    }),

  loginUserAnonymously: (): Promise<UserCredential> => new Promise(() => {}),

  loginUserWithEmailAndPassword: (
    email: string,
    password: string
  ): Promise<UserCredential> =>
    new Promise(() => {
      email;
      password;
    }),

  resetPassword: (email: string): Promise<void> =>
    new Promise(() => {
      email;
    }),

  upgradeAccount: (email: string, password: string): Promise<UserCredential> =>
    new Promise(() => {
      email;
      password;
    }),

  currentUser: null as User | null,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsAuthenticating(false);
    });

    return unsubscribe;
  }, []);

  const signUpWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUserAnonymously = () => {
    return signInAnonymously(auth);
  };

  const loginUserWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  const upgradeAccount = (email: string, password: string) => {
    const credential = EmailAuthProvider.credential(email, password);
    return linkWithCredential(auth.currentUser!, credential);
  };

  const context = {
    signUpWithEmailAndPassword,
    loginUserWithEmailAndPassword,
    loginUserAnonymously,
    resetPassword,
    upgradeAccount,
    currentUser,
  };

  return (
    <AuthContext.Provider value={context}>
      {!isAuthenticating ? (
        children
      ) : (
        <FullCenterWrapper>
          <SubmitIndicator size={150} />
        </FullCenterWrapper>
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
