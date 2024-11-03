import {
  arrayUnion,
  collection,
  doc,
  increment,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "./config";
import {
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import {
  modelsCollection,
  setsCollection,
  usersCollection,
} from "./collectionNames";

export const createUserData = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No logged user");
  }
  if (!user.isAnonymous) {
    setDoc(doc(db, usersCollection, user.uid), {
      userSetsList: [],
    }).catch((err) => {
      console.log(err);
    });
  }
};

export const createNewUserSet = async (setName: string) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    try {
      const newSet: SetPersistanceData = {
        setName,
        modelsList: [],
        allModelsNumber: 0,
        finishedModelsNumber: 0,
      };
      const bath = writeBatch(db);

      const userDocRef = doc(db, usersCollection, userId);
      const setsRef = doc(
        collection(db, usersCollection, userId, setsCollection),
        setName
      );

      bath.set(setsRef, newSet);

      bath.update(userDocRef, {
        userSetsList: arrayUnion(setName),
      });

      await bath.commit();
    } catch (err) {
      console.log(err);
    }
  }
};

export const createNewModelData = async (
  setId: string,
  data: ModelPersistanceData
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    try {
      const bath = writeBatch(db);
      const setRef = doc(
        collection(
          db,
          usersCollection,
          userId,
          setsCollection,
          setId,
          modelsCollection
        ),
        data.modelName
      );
      bath.set(setRef, data);

      const setDocRef = doc(db, usersCollection, userId, setsCollection, setId);

      bath.update(setDocRef, {
        modelsList: arrayUnion(data.modelName),
      });

      await bath.commit();
    } catch (err) {
      console.log(err);
    }
  }
};

export const updateModelInDatabase = async (
  setId: string,
  data: ModelPersistanceData
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;
    try {
      const bath = writeBatch(db);
      const setRef = doc(
        collection(
          db,
          usersCollection,
          userId,
          setsCollection,
          setId,
          modelsCollection
        ),
        data.modelName
      );
      bath.set(setRef, data);

      if (data.isModelArranged) {
        const setDocRef = doc(
          db,
          usersCollection,
          userId,
          setsCollection,
          setId
        );

        bath.update(setDocRef, {
          finishedModelsNumber: increment(1),
        });
      }

      await bath.commit();
    } catch (err) {
      console.log(err);
    }
  }
};
