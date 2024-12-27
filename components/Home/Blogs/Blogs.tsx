import React from "react";

export default function BlogsPage() {
  const articles = [
    {
      id: 1,
      title: "The Art of Prompt Engineering: Crafting Effective Queries for AI",
      description: "In an era where artificial intelligence (AI) has become a cornerstone of innovation across numerous industries, the ability to interact effectively with AI systems through well-crafted prompts—known as prompt engineering—has emerged as a critical skill. This nuanced field combines elements of linguistics, cognitive science, and computer science to optimize human-AI interactions. Mastery in prompt engineering not only enhances the functionality of AI but also extends its utility, making it an invaluable tool for professionals in tech, content creation, customer support, and beyond.",
      link: "https://www.linkedin.com/pulse/art-prompt-engineering-crafting-effective-queries-ai-gourav-b-zfefc/?trackingId=ZmwiP4BsmbGJwsGLYCKAww%3D%3D",
    },
    {
      id: 2,
      title: "Integrating Firebase as Your Database",
      description: "irebase, a Backend-as-a-Service (BaaS) platform by Google, provides a scalable and feature-rich solution for developers to build robust web and mobile applications. One of its standout features is Firebase Realtime Database and Firestore—databases designed to handle real-time synchronization and scalable data needs. This guide will walk you through the process of integrating Firebase as your database in a project.",
      link: "https://www.linkedin.com/pulse/integrating-firebase-your-database-gourav-b-ro61c/?trackingId=0pExcUc%2F6D0MVSuFbS6s5A%3D%3D",
    },
    {
      id: 3,
      title: "Introduction to Bootstrap: A Guide to Building Responsive Websites",
      description: "In the ever-evolving world of web development, creating websites that are visually appealing, user-friendly, and responsive has become essential. Bootstrap, a popular front-end framework, simplifies the process of designing and developing websites by providing pre-designed components and responsive grid systems. This article explores what Bootstrap is, its features, and how to use it effectively.",
      link: "https://www.linkedin.com/pulse/introduction-bootstrap-guide-building-responsive-websites-gourav-b-zlpkc/?trackingId=jOGLx5KJwXrSTUYFe9iBdw%3D%3D",
    },
    {
      id: 4,
      title: "Unlocking the Power of Tailwind CSS: A Modern Approach to Web Styling",
      description: "In the dynamic world of web development, where frameworks, libraries, and tools continuously evolve, staying ahead of the curve often means adopting solutions that streamline workflows and enhance productivity. Among these modern solutions, Tailwind CSS has emerged as a game-changer, revolutionizing how developers think about and approach styling.",
      link: "https://www.linkedin.com/pulse/unlocking-power-tailwind-css-modern-approach-web-styling-gourav-b-qn3kc/?trackingId=1khRHq0DQkvPfYrUuBj4rg%3D%3D",
    },
  ];

  return (
    <div id="Blogs" className="w-full min-h-screen bg-AAprimary py-16 px-8">
      <h1 className="text-gray-200 text-5xl font-extrabold tracking-wide text-center mb-12">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.link}
            target="blank"
            className="block bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <h2 className="text-gray-100 text-2xl font-bold mb-3">{article.title}</h2>
            <p className="text-gray-400 text-sm mb-6">{article.description}</p>
            <span className="text-AAsecondary font-bold hover:underline">Read More</span>
          </a>
        ))}
      </div>
    </div>
  );
}