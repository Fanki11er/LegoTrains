import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  writeBatch,
} from "firebase/firestore";
import { auth, db } from "./config";
import {
  ModelPersistenceData,
  SetPersistenceData,
} from "../Classes/PersistenceModule";
import {
  errorLogsCollection,
  modelsCollection,
  setsCollection,
  usersCollection,
} from "./collectionNames";
import { getSetModelsList } from "./readFromDbFunctions";
import { DatabaseErrorLog } from "../Types/DatabaseErrorLog";

export const createUserData = async () => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    setDoc(doc(db, usersCollection, user.uid), {
      userSetsList: [],
    });
  }
};

export const createNewUserSet = async (setName: string | undefined) => {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous && setName) {
    const userId = user.uid;

    const newSet: SetPersistenceData = {
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

    return bath.commit();
  }
};

export const createNewModelData = async (
  setId: string,
  data: ModelPersistenceData
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;

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

    return bath.commit();
  }
};

export const updateModelInDatabase = async (
  setId: string,
  data: ModelPersistenceData
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;

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

    if (data.isModelFinished) {
      const setDocRef = doc(db, usersCollection, userId, setsCollection, setId);

      bath.update(setDocRef, {
        finishedModelsNumber: increment(1),
      });
    }

    return bath.commit();
  }
};

export const resetSet = async (setName: string) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  if (!user.isAnonymous) {
    const userId = user.uid;

    const emptySet: SetPersistenceData = {
      setName,
      modelsList: [],
      allModelsNumber: 0,
      finishedModelsNumber: 0,
    };
    const bath = writeBatch(db);

    const modelsList = await getSetModelsList(setName);

    if (modelsList) {
      modelsList.forEach((model) => {
        const modelsRef = doc(
          collection(
            db,
            usersCollection,
            userId,
            setsCollection,
            setName,
            modelsCollection
          ),
          model
        );

        bath.set(modelsRef, {});
      });
    }

    const setsRef = doc(
      collection(db, usersCollection, userId, setsCollection),
      setName
    );

    bath.set(setsRef, emptySet);

    return bath.commit();
  }
};

export const saveErrorLog = async (
  errorMessage: string,
  setId: string = "Unknown"
) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("No logged user");
  }

  const errorLog: DatabaseErrorLog = {
    userId: user.uid,
    setId,
    errorMessage,
    timesStamp: serverTimestamp(),
  };

  addDoc(collection(db, errorLogsCollection), errorLog).catch(() => {
    throw new Error("Sorry, something went wrong");
  });
};
