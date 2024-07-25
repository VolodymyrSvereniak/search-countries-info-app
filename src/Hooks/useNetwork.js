import { useState, useEffect } from "react";

export const useNetwork = () => {
  const [isOnline, setOnline] = useState(true);

  function updateNetworkStatus() {
    setOnline(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener("online", updateNetworkStatus);
    window.addEventListener("offline", updateNetworkStatus);

    return () => {
      window.removeEventListener("online", updateNetworkStatus);
      window.removeEventListener("offline", updateNetworkStatus);
    };
  }, []);

  return isOnline;
};
