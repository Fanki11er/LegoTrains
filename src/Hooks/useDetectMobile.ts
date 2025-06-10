import { useEffect, useState } from "react";

type DeviceType = "mouse" | "touch";

const POINTER_QUERY = "(pointer: fine)";
const SCREEN_QUERY = "(max-width: 800px)";

const useDetectMobile = () => {
  const [deviceType, setDeviceType] = useState<DeviceType>(() =>
    window.matchMedia(POINTER_QUERY).matches ? "mouse" : "touch"
  );

  const [isSmallScreen, setIsLargeScreen] = useState<boolean>(
    () => window.matchMedia(SCREEN_QUERY).matches
  );

  useEffect(() => {
    const pointerQuery = window.matchMedia(POINTER_QUERY);
    const screenQuery = window.matchMedia(SCREEN_QUERY);

    const updateDeviceType = () => {
      setDeviceType(pointerQuery.matches ? "mouse" : "touch");
    };

    const updateScreen = () => {
      setIsLargeScreen(screenQuery.matches);
    };

    pointerQuery.addEventListener("change", updateDeviceType);
    screenQuery.addEventListener("change", updateScreen);

    updateDeviceType();
    updateScreen();

    return () => {
      pointerQuery.removeEventListener("change", updateDeviceType);
      screenQuery.removeEventListener("change", updateScreen);
    };
  }, []);

  return deviceType === "touch" || isSmallScreen;
};

export default useDetectMobile;
