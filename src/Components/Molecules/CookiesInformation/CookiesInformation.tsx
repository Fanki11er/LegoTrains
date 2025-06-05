import {
  AcceptAllButton,
  AcceptSelectedButton,
  ButtonsWrapper,
  ConsentsWrapper,
  CookieImage,
  CookiesInfoContent,
  CookiesInfoDialog,
  CookiesParagraph,
  CookieTextWrapper,
  RejectAllButton,
} from "./CookiesInformation.styles";
import cookieImage from "../../../assets/svg/Cookie.svg";
import { useEffect, useRef } from "react";
import ConsentCheckbox from "../ConsentCheckbox/ConsentCheckbox";
import { Consent } from "../../../Types/generalTypes";
import useAnalytics from "../../../Hooks/useAnalytics";

const CookiesInformation = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const analyticsInputRef = useRef<HTMLInputElement | null>(null);

  const { updateConsent } = useAnalytics();

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleUpdateConsent = (consent: Consent) => {
    updateConsent(consent);

    dialogRef.current?.close();
  };

  return (
    <CookiesInfoDialog ref={dialogRef}>
      <CookieImage src={cookieImage} alt={"Cookie"} />
      <CookiesInfoContent>
        <CookieTextWrapper>
          <CookiesParagraph>
            This website uses cookies to provide you with the best possible
            experience. They also allow me to analyze users' behavior to improve
            the website for you.
          </CookiesParagraph>
        </CookieTextWrapper>
        <ButtonsWrapper>
          <AcceptAllButton
            onClick={() => handleUpdateConsent({ analytics: true })}
          >
            Accept All
          </AcceptAllButton>
          <AcceptSelectedButton
            onClick={() =>
              handleUpdateConsent({
                analytics: analyticsInputRef.current?.checked || false,
              })
            }
          >
            Accept Selected
          </AcceptSelectedButton>
          <RejectAllButton
            onClick={() => handleUpdateConsent({ analytics: false })}
          >
            Reject All
          </RejectAllButton>
        </ButtonsWrapper>
        <ConsentsWrapper>
          <ConsentCheckbox label={"Necessary"} checked disabled />
          <ConsentCheckbox label={"Analytics"} ref={analyticsInputRef} />
        </ConsentsWrapper>
      </CookiesInfoContent>
    </CookiesInfoDialog>
  );
};

export default CookiesInformation;
