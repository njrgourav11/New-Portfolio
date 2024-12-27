import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Linkfields() {
  const linkfieldsTasks = [
    {
      text: "Contributed to the development of scalable and efficient software solutions for Linkfields.",
      keywords: ["Linkfields"],
    },
    {
      text: "Collaborated with cross-functional teams to optimize system performance and enhance user experience.",
      keywords: ["cross-functional teams", "system performance"],
    },
    {
      text: "Implemented robust authentication mechanisms and integrated third-party tools to streamline operations.",
      keywords: ["authentication mechanisms", "third-party tools"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        {/* Linkfields Section */}
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Associate SDE Intern <span className="text-AAsecondary">@ Linkfields</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">September 2024 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.linkfields.com/", "_blank")}
          >
            www.linkfields.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description for Linkfields */}
          {linkfieldsTasks.map((item, index) => (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className="h-5 w-4 text-AAsecondary flex-none" />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                }}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
