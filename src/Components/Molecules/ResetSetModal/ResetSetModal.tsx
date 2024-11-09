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
import { resetSet } from "../../../firebase/writeToDbFunctions";
import { useState } from "react";
import { OkStatus } from "../../Atoms/OkStatus/OkStatus.styles";
import { FormError } from "../../Atoms/FormError/FormError.styles";
import SubmitIndicator from "../SubmitIndicator/SubmitIndicator";
import { useQueryClient } from "@tanstack/react-query";
import { SET_DATA } from "../../../Api/queryKeys";

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
        <ResetSetModalWarningIcon src={warningIcon} alt={"Warning icon"} />
        {status === "ok" && <OkStatus>Reseated</OkStatus>}
        {status === "error" && <FormError>Error</FormError>}
        <ResetSetModalWarningText>
          Click Reset button if you want to reset your progress on this set (all
          models in this set will be reseated)
        </ResetSetModalWarningText>
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
                        queryKey: [SET_DATA, setId],
                      });
                      queryClient.invalidateQueries({
                        queryKey: [SET_DATA, setId],
                      });
                    })
                    .catch(() => setStatus("error"));
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
