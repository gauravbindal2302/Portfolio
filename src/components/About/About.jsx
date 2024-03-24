import React, { useState, useEffect } from "react";

export default function About() {
  const [selectedPara, setSelectedPara] = useState(null);

  // Array containing paragraphs
  const paragraphs = [
    "Hi there! I'm Gaurav Bindal, a passionate software developer and engineering student from Bharat Institute of Technology, Meerut.",
    "Currently, I'm working as a Software Development Engineer Intern at Campus-Connect. My role involves empowering global student access to expertise and opportunities, fostering a collaborative community.",
    "I have a keen interest in web development and have worked on several projects to enhance my skills. Some of my notable projects include DeepStore, a comprehensive e-commerce web application, and ForecastHub, a live search weather forecasting app. I'm proficient in various technologies including React.js, Node.js, Express.js, MongoDB, and more.",
    "Apart from coding, I'm also actively involved in various extracurricular activities. I have served as the Core Coordinator of BIT's Intra Institute Cultural Fest, Abhivyakti, and I'm also a member of GDSC BIT where I have volunteered at various events and workshops organized by the group.",
    "I'm constantly exploring new technologies and frameworks to expand my skillset and enhance my capabilities as a developer. Feel free to connect with me on LinkedIn or check out my GitHub profile to learn more about my work and projects.",
  ];

  // Automatically traverse paragraphs
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedPara((prev) =>
        prev === paragraphs.length - 1 ? 0 : prev + 1
      );
    }, 3000); // Change paragraph every 3 seconds

    return () => clearInterval(interval);
  }, [paragraphs]);

  return (
    <section id="about" className="lg:h-screen w-screen bg-gray-100 flex pt-16">
      <div className="container mx-auto lg:px-12 px-6 justify-center items-center gap-12 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <div className="border-l-4 border-purple-500">
            {/* Map through the paragraphs array */}
            {paragraphs.map((para, index) => (
              <div key={index}>
                <p
                  className={`text-normal text-gray-700  p-4 ${
                    selectedPara === index ? "bg-gray-200" : ""
                  }`}
                >
                  {para}
                </p>
                {/* Soft border between paragraphs */}
                {index !== paragraphs.length - 1 && (
                  <div className="border-b border-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-2/5 flex flex-col items-center justify-center text-center mt-8 lg:mt-0 hidden md:flex">
          <h1 className="text-4xl font-bold">About Me</h1>
          <img
            src="https://dpwalay.com/wp-content/uploads/2023/11/dazzling-girl-dp-for-whatsapp.jpg"
            alt="Gaurav Bindal"
            className="rounded-full w-40 h-40 lg:w-72 lg:h-72 mt-8"
          />
        </div>
      </div>
    </section>
  );
}
