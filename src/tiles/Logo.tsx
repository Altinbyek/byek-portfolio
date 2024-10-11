import React from "react";
import LogoImage from "../../public/assets/header/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div>
      <Link href="/">
        <Image
          className="rounded-full cursor-pointer"
          src={LogoImage}
          height={60}
          width={60}
          alt=""
        />
      </Link>
    </motion.div>
  );
}

export default Logo;
