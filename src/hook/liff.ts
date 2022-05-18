import { Liff } from "@line/liff";
import LiffMockPlugin from "@line/liff-mock";
import { useEffect, useState } from "react";

export const useLiff = () => {
  const [liffObject, setLiffObject] = useState<Liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        liff.use(new LiffMockPlugin());
        console.log("LIFF init...");
        liff
          .init({
            liffId: process.env.NEXT_PUBLIC_LIFF_ID || "",
            mock: true
          })
          .then(() => {
            console.log("LIFF init succeeded.");
            setLiffObject(liff);
          })
          .catch((error: Error) => {
            console.log("LIFF init failed.");
            setLiffError(error.toString());
          });
      });
  }, []);

  return {
    liffObject,
    liffError
  };
};