import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import {
  ExistingDataInfo,
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistenceModule";
import { auth, db } from "./config";
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
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    const userDocRef = doc(db, usersCollection, userId);

    const userData = await getDoc(userDocRef);
    if (userData.exists()) {
      return userData.data().userSetsList as ExistingDataInfo[];
    }
  }
  return [];
};

export const getSetDataFromDatabase = async (setId: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (user && !user.isAnonymous) {
    const userId = user.uid;
    const setDataRef = doc(db, usersCollection, userId, setsCollection, setId);
    const set = await getDoc(setDataRef);
    if (set.exists()) {
      return set.data() as SetPersistanceData;
    }
  }
  return null;
};

export const getAllSetsPersistanceData = async () => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    const q = query(collection(db, usersCollection, userId!, setsCollection));

    const allUserSets = await getDocs(q);
    return allUserSets.docs.map((doc) => {
      return doc.data() as SetPersistanceData;
    });
  }
  return [];
};

export const getSetModelsDataFromDatabase = async (setId: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    const data = await getDocs(
      collection(
        db,
        usersCollection,
        userId,
        setsCollection,
        setId,
        modelsCollection
      )
    );
    const modelsData = data.docs.map((doc) => {
      return doc.data() as ModelPersistanceData;
    });
    return modelsData;
  }
  return null;
};

export const getSetModelsList = async (setId: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;

    const setDocRef = doc(db, usersCollection, userId, setsCollection, setId);
    const data = await getDoc(setDocRef);
    if (data.exists()) {
      return data.data().modelsList as string[];
    }
    return [];
  }
};
