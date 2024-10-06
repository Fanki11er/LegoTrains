import { arrayUnion, collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./config";
import {
  ExistingDataInfo,
  ModelPersistanceData,
  SetPersistanceData,
} from "../Classes/PersistanceModule";
import { setsCollection, usersCollection } from "./collectionNames";

export const createNewUserSet = async (userId: string, setName: string) => {
  const newSet: SetPersistanceData = {
    setName,
    modelsList: [],
    models: [],
    allModelsNumber: 0,
    finishedModelsNumber: 0,
  };
  const bath = writeBatch(db);

  const setsRef = doc(collection(db, setsCollection));
  const userDocRef = doc(db, usersCollection, userId);

  bath.set(setsRef, newSet);

  const dataInfo: ExistingDataInfo = {
    id: setsRef.id,
    name: setName,
  };

  bath.update(userDocRef, {
    userSetsList: arrayUnion(dataInfo),
  });

  await bath.commit();
};

export const createNewModelData = async (
  setId: string,
  data: ModelPersistanceData
) => {
  const bath = writeBatch(db);
  const set = doc(db, setsCollection, setId);
  bath.update(set, {
    models: arrayUnion(data),
  });

  bath.update(set, {
    modelsList: arrayUnion(data.modelName),
  });

  await bath.commit();
};
