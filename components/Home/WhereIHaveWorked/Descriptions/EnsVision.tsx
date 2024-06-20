import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
  const tasks = [
    {
      text: "Worked on the front-end development using Next.js, Tailwind CSS, React.js, Bootstrap",
      keywords: ["Next.js", "React.js", "Tailwind CSS", "Bootstrap", "Framer-Motion"],
    },
    {
      text: "Worked on back-end development using Node.js, Express.js, Firebase, Mongodb.",
      keywords: ["Node.js", "Express.js", "Firebase", "Mongodb"],
    },
    {
      text: "Implemented a responsive website design and enhanced interactivity.",
      keywords: ["website design", "responsive"],
    },
    {
      text: "Collaborated closely with the team in regular meetings and interacted with Database and gained expertise in Node & Express",
      keywords: ["Node", "Express"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Full Stack Developer <span className="text-AAsecondary">@ React</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Nov 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.ansabyte.com/", "_blank")}
          >
            www.ansabyte.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
