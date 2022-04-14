import { useEffect, useState } from "react";
import "../styles/main.scss";

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  return <Component {...pageProps} />;
}
