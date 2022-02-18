import React, { useEffect } from "react";
import Navigation from "./Nav/Navigation";
import App from "./app";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import FallBack from "./HomeComponents/Fallback";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (process.browser) {
      document.querySelector('body').style.backgroundColor = '#bf3f3f7'
    }
  }, []);

  return (
    <div className={styles.container} style={{ width: "100vw" }}>
      {router.isFallback ? (
        <FallBack />
      ) : (
        <div>
          <Navigation style={{width: '300px', marginLeft: '10px'}} />
          <App />
        </div>
      )}
    </div>
  );
}
