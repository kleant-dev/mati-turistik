"use client";

import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useState } from "react";
import { ExperienceBlock } from "./ExperienceBlock";

export function SharedLayoutAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-full bg-bgColor flex flex-col gap-4">
      <nav className="bg-bgColor px-1.5 pt-1.5 rounded-t-lg ">
        <ul className="flex w-full px-8 m-0 font-medium text-sm">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              initial={false}
              animate={{
                borderColor: item === selectedTab ? "white" : "",
              }}
              className={clsx(
                "flex flex-col rounded-t-lg w-full p-2.5 border-2 border-dashed border-opacity-0 cursor-pointer justify-between items-center ",
                {
                  "border-white": item !== selectedTab,
                }
              )}
              onClick={() => setSelectedTab(item)}
            >
              <Image
                src={item.iconSrc}
                width={60}
                height={60}
                alt={item.label}
              />
              <p className="text-white">{item.label}</p>
            </motion.li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? <ExperienceBlock /> : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

/**
 * ==============   Data   ================
 */

const allIngredients = [
  { iconSrc: "/eat.png", label: "Gastronomi" },
  { iconSrc: "/culture.jpg", label: "Kulture" },
  { iconSrc: "/coconut.png", label: "Argetim" },
];

const [gastronomy, culture, leisure] = allIngredients;
const tabs = [gastronomy, culture, leisure];
