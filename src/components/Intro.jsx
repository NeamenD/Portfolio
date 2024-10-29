import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 className="text-5xl md:text-7xl mb-4 md:mb-6 font-extrabold text-blue-600">
        Neamen Dobamo
      </h1>
      <p className="text-lg md:text-2xl mb-4 font-semibold text-gray-700 tracking-wide">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-medium text-gray-500 leading-relaxed">
        This is my entire bio, sharing more about my background, skills, and
        journey in tech.
      </p>
    </div>
  );
}

export default Intro;
