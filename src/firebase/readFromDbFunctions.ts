import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import {
  ExistingDataInfo,
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { db } from "./config";
import {
  modelsCollection,
  setsCollection,
  usersCollection,
} from "./collectionNames";

// export const getUserSetsListFromDatabase = async (userId: string) => {
//   const userDocRef = doc(db, usersCollection, userId);

//   const user = await getDoc(userDocRef);
//   if (user.exists()) {
//     return user.data().userSetsList as ExistingDataInfo[];
//   }

//   return [];
// };

export const getUserSetsListFromDatabase = async () => {
  const userDocRef = doc(db, usersCollection, "DGvg6QLY5DMdOwTfeeEH");

  const user = await getDoc(userDocRef);
  if (user.exists()) {
    return user.data().userSetsList as ExistingDataInfo[];
  }

  return [];
};

export const getSetDataFromDatabase = async (setId: string) => {
  const setDataRef = doc(
    db,
    usersCollection,
    "DGvg6QLY5DMdOwTfeeEH",
    setsCollection,
    setId
  );
  const set = await getDoc(setDataRef);
  if (set.exists()) {
    return set.data() as SetPersistanceData;
  }
  return undefined;
};

export const getSetModelsDataFromDatabase = async (setId: string) => {
  const data = await getDocs(
    collection(
      db,
      usersCollection,
      "DGvg6QLY5DMdOwTfeeEH",
      setsCollection,
      setId,
      modelsCollection
    )
  );
  const modelsData = data.docs.map((doc) => {
    return doc.data() as ModelPersistanceData;
  });

  return modelsData;
};
