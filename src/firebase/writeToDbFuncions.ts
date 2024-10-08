import {
  arrayUnion,
  collection,
  doc,
  increment,
  writeBatch,
} from "firebase/firestore";
import { db } from "./config";
import {
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import {
  modelsCollection,
  setsCollection,
  usersCollection,
} from "./collectionNames";

export const createNewUserSet = async (setName: string) => {
  try {
    const newSet: SetPersistanceData = {
      setName,
      modelsList: [],
      allModelsNumber: 0,
      finishedModelsNumber: 0,
    };
    const bath = writeBatch(db);

    const userDocRef = doc(db, usersCollection, "DGvg6QLY5DMdOwTfeeEH");
    const setsRef = doc(
      collection(db, usersCollection, "DGvg6QLY5DMdOwTfeeEH", setsCollection),
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
};

export const createNewModelData = async (
  setId: string,
  data: ModelPersistanceData
) => {
  try {
    const bath = writeBatch(db);
    const setRef = doc(
      collection(
        db,
        usersCollection,
        "DGvg6QLY5DMdOwTfeeEH",
        setsCollection,
        setId,
        modelsCollection
      ),
      data.modelName
    );
    bath.set(setRef, data);

    const setDocRef = doc(
      db,
      usersCollection,
      "DGvg6QLY5DMdOwTfeeEH",
      setsCollection,
      setId
    );

    bath.update(setDocRef, {
      modelsList: arrayUnion(data.modelName),
    });

    await bath.commit();
  } catch (err) {
    console.log(err);
  }
};

export const updateModelInDatabase = async (
  setId: string,
  data: ModelPersistanceData
) => {
  try {
    const bath = writeBatch(db);
    const setRef = doc(
      collection(
        db,
        usersCollection,
        "DGvg6QLY5DMdOwTfeeEH",
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
        "DGvg6QLY5DMdOwTfeeEH",
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
};
