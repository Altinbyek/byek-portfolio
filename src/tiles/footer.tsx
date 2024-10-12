import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex justify-center">
      <div className="main-container">
        <span className="text-xl text-primary">Холбоо барих</span>
        <div className="top-40"></div>
        <div className="contact">
          <span className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur quos deserunt cum rerum nemo quam molestias non
            perferendis ullam illum sed expedita, voluptas consequatur odit ea
            ex magnam similique voluptates!
          </span>
          <div className="top-40"></div>
          <div className="social flex flex-col gap-y-4">
            <span>Gmail: altinbekaibyek@gmail.com</span>
            <span>Phone: (+976) 99421400</span>
          </div>
        </div>
        <div className="top-40"></div>
      </div>
    </div>
  );
}

export default Footer;
