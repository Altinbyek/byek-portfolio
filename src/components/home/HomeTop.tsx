import React from "react";
import styles from "./HomeTop.module.scss";
import Image from "next/image";
import AvatarGradient from "../../../public/assets/home/avatar-gradient.svg";
import Avatar from "../../../public/assets/home/avatar.svg";
import Arrow from "../../../public/assets/home/arrow.svg";
// import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
// import Ellipse from "../../../public/assets/home/text-ellipse.svg";

function HomeTop() {
  const words = [
    {
      text: "Сайн уу!",
      className: "text-white",
    },
    {
      text: "Намайг",
    },
    {
      text: "Aйбек",
    },
    {
      text: "овогтой",
    },
    {
      text: "Алтанбек",
    },
    {
      text: "гэдэг.",
    },
  ];

  const words1 = [
    {
      text: "Алдаа",
    },
    {
      text: "хийсэн",
    },
    {
      text: "хүн,",
    },
  ];

  const words2 = [
    {
      text: "алхам",
    },
    {
      text: "хийсэн",
    },
    {
      text: "хүн.",
    },
  ];

  const words3 = [
    {
      text: "Хамтдаа",
      className: "text-white",
    },
    {
      text: "хүчтэй.",
      className: "text-white",
    },
  ];
  return (
    <div className={styles.body}>
      <div className="main-container w-full flex justify-start">
        <div className={styles.avatar}>
          <Image
            className={styles.AvatarGradient}
            src={AvatarGradient}
            alt=""
            width={260}
            height={200}
          />
          <Image
            className={styles.avatarImg}
            src={Avatar}
            alt=""
            width={120}
            height={120}
          />
        </div>
        <Image
          className={styles.arrow}
          src={Arrow}
          alt=""
          width={160}
          height={120}
        />
        <div className="flex flex-col gap-y-6 relative top-[45px]">
          <div>
            <TypewriterEffectSmooth
              words={words}
              className="text-[#7127BA]"
              // cursorClassName="hidden"
              size="xs"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            {/* <span className="white text-[14px]">Фронт-Энд хөгжүүлэгч</span> */}
            <div className="">
              {/* <span className="white">Алдаа хийсэн хүн, алхам хийсэн хүн.</span> */}
              <TypewriterEffectSmooth
                words={words1}
                className="text-[#7127BA]"
                size="2xl"
                cursorClassName="hidden"
              />
              <TypewriterEffectSmooth
                words={words2}
                className="text-[#7127BA]"
                size="2xl"
              />
              <TypewriterEffectSmooth
                words={words3}
                className="text-[#7127BA]"
                size="2xl"
                cursorClassName="hidden"
              />
              {/* <div className="flex items-center gap-x-4">
                <span className="text-primary">Хамтдаа </span>
                <span>хүчтэй.</span>
              </div> */}
              {/* <Image
                className="absolute -left-[20px] top-[80px] transform: rotate-6"
                src={Ellipse}
                width={140}
                height={220}
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
