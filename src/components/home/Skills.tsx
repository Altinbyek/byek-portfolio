import Image from "next/image";
import React from "react";
import skills from "../../../public/assets/skills.svg";
import { ContainerScroll } from "../ui/container-scroll-animation";

function Skills() {
  return (
    <div className="flex justify-center items-center">
      <div className="main-cntainer">
        {/* <Image src={skills} width={1000} height={450} alt="skills" /> */}
        <div className="flex justify-start">
          <span className="text-primary text-xl">Ур чадвар</span>
        </div>
        <div className="top-40"></div>
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>{/* <h1 className="text-xl text-primary">Ур чадвар</h1> */}</>
            }
          >
            <Image
              src={skills}
              alt="hero"
              height={720}
              width={660}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </div>
    </div>
  );
}

export default Skills;
