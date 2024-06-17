import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    title,
    author,
    image,
    category,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {author} |{" "}
            {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" /> {reading_time}
          </p>
          <p className="text-base text-gray-500">{content}</p>
          <div className="text-base text-gray-500">
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis recusandae quos perferendis ex cupiditate neque aliquam
              necessitatibus praesentium doloribus fugit, illum adipisci
              obcaecati cumque aut facere quis et blanditiis.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestiae, asperiores adipisci vitae corporis ducimus porro
              temporibus delectus. Eum minima corporis alias deserunt sapiente
              reprehenderit delectus magnam eveniet itaque eius.
            </p>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis recusandae quos perferendis ex cupiditate neque aliquam
              necessitatibus praesentium doloribus fugit, illum adipisci
              obcaecati cumque aut facere quis et blanditiis.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestiae, asperiores adipisci vitae corporis ducimus porro
              temporibus delectus. Eum minima corporis alias deserunt sapiente
              reprehenderit delectus magnam eveniet itaque eius.
            </p>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis recusandae quos perferendis ex cupiditate neque aliquam
              necessitatibus praesentium doloribus fugit, illum adipisci
              obcaecati cumque aut facere quis et blanditiis.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestiae, asperiores adipisci vitae corporis ducimus porro
              temporibus delectus. Eum minima corporis alias deserunt sapiente
              reprehenderit delectus magnam eveniet itaque eius.
            </p>
            <p className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              officiis recusandae quos perferendis ex cupiditate neque aliquam
              necessitatibus praesentium doloribus fugit, illum adipisci
              obcaecati cumque aut facere quis et blanditiis.
            </p>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              molestiae, asperiores adipisci vitae corporis ducimus porro
              temporibus delectus. Eum minima corporis alias deserunt sapiente
              reprehenderit delectus magnam eveniet itaque eius.
            </p>
          </div>
        </div>

        <div className="lg:w-1/2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
