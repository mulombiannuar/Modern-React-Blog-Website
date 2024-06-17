import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="grid mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            {/* Category 1 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">News</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">World</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Games</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">References</a>
                </li>
              </ul>
            </div>

            {/* Category 2 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Apples</p>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Web</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">eCommerce</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Business</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Entertainment</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Portfolio</a>
                </li>
              </ul>
            </div>

            {/* Category 3 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">Cherry</p>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Media</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Brochures</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Non profit</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Education</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Projects</a>
                </li>
              </ul>
            </div>

            {/* Category 4 */}
            <div>
              <p className="font-medium tracking-wide text-gray-300">
                Business
              </p>
              <ul className="mt-2 space-y-2">
                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Information</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Personal</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Wiki</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Forum</a>
                </li>

                <li className="text-gray-500 transition-colors duration-300 hover:text-orange-500">
                  <a href="/">Projects</a>
                </li>
              </ul>
            </div>
          </div>

          {/* subecriptions 5 */}
          <div className="md:max-w-md lg:col-span-2 lg:mt-0  mt-5">
            <p className="font-medium tracking-wide text-gray-300">
              Subscribe for updates
            </p>
            <form className="mt-4 flex  flex-col md:flex-row">
              <input
                type="email"
                name="email"
                id="email"
                className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none"
              />
              <button
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500  focus:outline-none border"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
              illo veritatis at atque recusandae fugit reiciendis natus modi
              doloribus autem? Molestiae est quos pariatur explicabo hic ipsam
              aspernatur, mollitia natus.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="texct-sm text-gray-500 ">
            © Copyright 2023 | All rights reserved
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaTwitter className="h-6 w-6" />{" "}
            </a>

            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaInstagram className="h-6 w-6" />{" "}
            </a>

            <a
              href="/"
              className="text-gray-500 transition-all duration-300 hover:text-orange-500"
            >
              <FaFacebook className="h-6 w-6" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
