import { doc, getDoc } from "firebase/firestore";
import {
  ExistingDataInfo,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { db } from "./config";
import { setsCollection, usersCollection } from "./collectionNames";

export const getUserSetsListFromDatabase = async (userId: string) => {
  const userDocRef = doc(db, usersCollection, userId);

  const user = await getDoc(userDocRef);
  if (user.exists()) {
    return user.data().userSetsList as ExistingDataInfo[];
  }

  return [];
};

export const getSetDataFromDatabase = async (setId: string) => {
  const setDataRef = doc(db, setsCollection, setId);
  const set = await getDoc(setDataRef);
  if (set.exists()) {
    return set.data() as SetPersistanceData;
  }
  return undefined;
};
