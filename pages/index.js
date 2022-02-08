import React, { useState } from "react";
import Navigation from "./Nav/Navigation";
import App from "./app";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import FallBack from "./Fallback";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container} style={{ width: "100vw" }}>
      {router.isFallback ? (
        <FallBack />
      ) : (
        <div>
          <Navigation />
          <App />
        </div>
      )}
    </div>
  );
}
