import { magicnum } from "@/services/request";
import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div className="flex gap-8 items-center">
      {magicnum?.menuData?.map((item) => {
        return (
          <Link href={item?.link} key={item?.id} className="group">
            <span className="group-hover:text-white text-[#C3C3C3] text-xs">
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

export default Menu;
