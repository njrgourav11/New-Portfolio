import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function nist() {
  const tasks = [
    {
      text: "Developed the NIST website using React, TypeScript, and Tailwind CSS, designed to be used by over 20,000 students and faculty members.",
      keywords: ["NIST website", "React", "TypeScript", "Tailwind CSS", "20,000 students and faculty members"],
    },
    {
      text: "Implemented Firebase for secure authentication and database management, ensuring reliable user access and data storage.",
      keywords: ["Firebase", "authentication", "database management"],
    },
    {
      text: "Integrated Twilio as an SMS API to enable seamless communication and notifications.",
      keywords: ["Twilio", "SMS API", "communication", "notifications"],
    },
    {
      text: "Created a faculty dashboard to efficiently manage attendance, with automated SMS notifications to parents if a student is marked absent.",
      keywords: ["faculty dashboard", "attendance", "SMS notifications", "parents"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col space-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            NIST Website & Faculty Dashboard <span className="text-AAsecondary">@ NIST</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2024 - July 2024</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.nist.edu", "_blank")}
          >
            www.nist.edu
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
