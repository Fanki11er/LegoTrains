import {
  ResetSetModalButtonsWrapper,
  ResetSetModalCloseButton,
  ResetSetModalContent,
  ResetSetModalResetButton,
  ResetSetModalWarningIcon,
  ResetSetModalWarningText,
  ResetSetModalWrapper,
} from "./ResetSetModal.styles";
import warningIcon from "../../../assets/svg/WarningIcon.svg";
import { resetSet, saveErrorLog } from "../../../firebase/writeToDbFunctions";
import { useState } from "react";
import { OkStatus } from "../../Atoms/OkStatus/OkStatus.styles";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import { useQueryClient } from "@tanstack/react-query";
import { All_SETS_DATA } from "../../../Api/queryKeys";

type Props = {
  setId: string;
  handleToggleModal: (setId: string) => void;
};
const ResetSetModal = ({ setId, handleToggleModal }: Props) => {
  const queryClient = useQueryClient();
  const [status, setStatus] = useState("");
  return (
    <ResetSetModalWrapper>
      <ResetSetModalContent>
        {status !== "ok" && (
          <ResetSetModalWarningIcon src={warningIcon} alt={"Warning icon"} />
        )}
        {status === "ok" && <OkStatus>Reseated</OkStatus>}
        {status === "error" && <FormError>Error</FormError>}
        {status !== "ok" && (
          <ResetSetModalWarningText>
            Click Reset button if you want to reset your progress on this set
            (all models in this set will be reseated)
          </ResetSetModalWarningText>
        )}
        {status === "submitting" && <SubmitIndicator />}
        {status !== "submitting" && (
          <ResetSetModalButtonsWrapper>
            {status !== "ok" && (
              <ResetSetModalResetButton
                onClick={() => {
                  setStatus("submitting");
                  resetSet(setId)
                    ?.then(() => {
                      setStatus("ok");

                      queryClient.invalidateQueries({
                        queryKey: [All_SETS_DATA],
                      });
                    })
                    .catch((err) => {
                      setStatus("error");
                      saveErrorLog(err.message, setId);
                    });
                }}
              >
                Reset
              </ResetSetModalResetButton>
            )}
            <ResetSetModalCloseButton onClick={() => handleToggleModal("")}>
              Close
            </ResetSetModalCloseButton>
          </ResetSetModalButtonsWrapper>
        )}
      </ResetSetModalContent>
    </ResetSetModalWrapper>
  );
};

export default ResetSetModal;
