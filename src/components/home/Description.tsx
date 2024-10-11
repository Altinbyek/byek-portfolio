import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function Description() {
  const words =
    " Фронт-энд хөгжүүлэгч мэргэжлээр ажиллаад 2 жил болж байна. Анх ажиллаж эхэлсэн цагаас хойш шинэ юм сурж, өөрийгөө байнга хөгжүүлж байхыг зорьсон бага багаар зорилгодоо хүрч байгаа. Цаашдаа шинэ технологиуд болон Бак-энд чиглэлээр өөрийгөө хөгжүүлж Full-Stack хөгжүүлэгч болох зорилготой.";
  return (
    <div className="flex justify-center">
      <div className="main-container">
        <div className="top-40"></div>
        <div className="flex flex-col gap-y-4">
          <span className="text-sm">Би програм хангамжийн инженер.</span>
          <span className="text-[10px]">
            Одоо би И-Монгол Академид фронт-энд хөгжүүлэгчээр ажиллаж байна.
          </span>
        </div>
        <div className="top-40"></div>
        <TextGenerateEffect words={words} />
      </div>
    </div>
  );
}

export default Description;
