"use client";
import React from "react";
import styles from "./header.module.scss";
import Logo from "./Logo";
import Menu from "./menu";
import { motion } from "framer-motion";

export function Header() {
  return (
    <div className={`${styles.body}`}>
      <div className="main-container flex items-center h-full justify-center">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={`${styles.menu} flex items-center justify-between w-full strong-shadow`}
        >
          <Logo />
          <Menu />
        </motion.div>
      </div>
    </div>
  );
}
