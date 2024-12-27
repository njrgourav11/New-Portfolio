import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function Yallo() {
  const tasks = [
    {
      text: "Conducted Comprehensive Market Research: Identified trends and consumer behaviors through comprehensive market research. Utilized analytical skills to assess the performance of digital marketing campaigns, providing insights for strategic improvements.",
      keywords: ["Identified","Utilized","Digital Marketing"],
    },
    {
      text: "Executed and Optimized Online Campaigns: Demonstrated hands‑on proficiency with digital marketing tools and platforms. Executed and optimized online campaigns, including social media management, SEO strategies, and email marketing, contributing to enhanced brand visibility and audience engagement.",
      keywords: ["social media management", "SEO strategies, and email marketing"],
    },
    {
      text: "Supported Sales and Lead Generation: Assisted in lead generation, client outreach, and implementation of sales strategies to support business development efforts. Collaborated with cross‑ functional teams for effective execution",
      keywords: ["lead generation","client outreach", "sales strategies"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Business Developer <span className="text-AAsecondary">@ Salesforce</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jan 2023 - July 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https:///www.yallo.com", "_blank")}
          >
            www.yallo.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
