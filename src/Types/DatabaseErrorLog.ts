import { FieldValue } from "firebase/firestore";

export type DatabaseErrorLog = {
  userId: string;
  timesStamp: FieldValue;
  errorMessage: string;
  setId?: string;
};
