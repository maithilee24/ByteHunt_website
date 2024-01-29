import React from "react";

const Intro = () => {
  return (
    <div className="mt-56 px-40 flex flex-row justify-between">
      <div>
        <div className="text-cyan-800 font-semibold text-4xl my-5">
          Introduction
        </div>
        <div>
          <p className="w-2/3 text-xl">
            A Student Council is a group of elected and volunteer students
            working together with an adult advisor within the framework of a
            constitution or bylaws to provide a means for student expression and
            assistance in school affairs and activities, give opportunities for
            student experience in leadership and encourage student / faculty /
            community relations.
          </p>
        </div>
      </div>
      <div>
        <img
          src="/student.avif"
          alt="Students picture"
          className="w-[120rem]"
        ></img>
      </div>
    </div>
  );
};

export default Intro;
