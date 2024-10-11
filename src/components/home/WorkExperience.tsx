"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import UB2023 from "../../../public/assets/home/ub2023.png";

function WorkExperience() {
  return (
    <div className="flex justify-center items-center">
      <div className="main-container">
        <span className="text-primary text-xl">Ажлын туршлага</span>
        <div className="top-4"></div>
        <CardContainer className="inter-var">
          <CardBody className="bg-primary relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white dark:text-white"
            >
              Улаанбаатар 2023 Зүүн Азийн Залуучуудын Наадам
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-300 text-[10px] text-left mt-4 dark:text-neutral-300"
            >
              Ахлах хөгжүүлэгчийн дор фронт-энд хөгжүүлэлтийн 80-90% тай хийж
              гүйцэтгэсэн.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={UB2023}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://ulaanbaatar2023.org/"
                target="__blank"
                className="rounded-xl text-xs text-white"
              >
                Үсрэх →
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default WorkExperience;
