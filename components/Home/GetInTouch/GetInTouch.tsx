import React, { useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "cf31094a-f7ec-4ef8-84b7-6d26710cf629",
        ...formData,
      }),
    });

    if (response.ok) {
      alert("Thank you for getting in touch!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      id="GetInTouchSection"
      data-aos="fade-up"
      className="flex flex-col space-y-8 w-full h-auto items-center bg-AAprimary py-12 px-4 sm:px-8"
    >
      {/* // ? Title === > What's Next?  */}
      <div className="flex flex-row items-center space-x-2">
        <ArrowIcon className="flex-none h-6 w-6 text-AAsecondary" />
        <div className="flex flex-row space-x-2 items-center">
          <span className="text-AAsecondary font-sans text-sm sm:text-base"> 04.</span>
          <span className="font-sans text-AAsecondary text-lg font-bold">What&apos;s Next?</span>
        </div>
      </div>

      {/* // ? Get In Touch */}
      <span className="text-gray-200 text-3xl sm:text-4xl font-bold tracking-wide opacity-90">
        Get In Touch
      </span>
      <p className="font-Header tracking-wide text-gray-400 text-center px-4 sm:px-16 md:px-0 md:w-[600px]">
        I&apos;m always open to new opportunities. Whether you have a question or just want to say hi, feel free to
        reach out, and I&apos;ll do my best to respond promptly.
      </p>

      {/* // ? Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 w-full max-w-lg bg-gradient-to-r from-AAprimary to-AAsecondary p-8 rounded-lg shadow-md"
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-gray-200 font-bold">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 text-gray-900 rounded-lg border-2 border-AAsecondary focus:outline-none focus:ring-2 focus:ring-AAprimary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-gray-200 font-bold">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 text-gray-900 rounded-lg border-2 border-AAsecondary focus:outline-none focus:ring-2 focus:ring-AAprimary"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-gray-200 font-bold">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 text-gray-900 rounded-lg border-2 border-AAsecondary focus:outline-none focus:ring-2 focus:ring-AAprimary h-36 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-AAprimary text-white py-3 rounded-lg font-bold hover:bg-AAsecondary hover:text-AAprimary transition duration-300 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}