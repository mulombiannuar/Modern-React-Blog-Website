import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Banner() {
  return (
    <div className="px-4 py-32 bg-black mx-auto">
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to Our Blog
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Start your blog to today and join our communicty of writers and
          readers who are passionate sharing their stories and ideas. We offer
          everything your need to get started, from helpful tips and tutorials
        </p>
        <div>
          <Link to="/" className="font-medium hover:text-orange-500 inline-flex items-center py-1">
            Learn more <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
