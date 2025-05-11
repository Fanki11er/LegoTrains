import { useState } from "react";

const useOperationStatus = () => {
  const [operationStatus, setOperationStatus] = useState("");
  const [operationError, setOperationError] = useState<Error | null>(null);

  const handleFinishWithError = (error: Error | null) => {
    setOperationStatus("");
    setOperationError(error);
  };

  const handleSetProceed = (message: string) => {
    setOperationError(null);
    setOperationStatus(message);
  };

  const handleFinishWithSuccess = () => {
    setOperationStatus("");
  };

  return {
    handleSetProceed,
    handleFinishWithSuccess,
    handleFinishWithError,
    operationStatus,
    operationError,
  };
};

export default useOperationStatus;
