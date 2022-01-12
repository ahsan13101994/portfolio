import React from 'react';
import { portfolio } from "../data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
         <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Examples of my past work that I worked on.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {portfolio.map((portfolio) => (
            <a
              href={portfolio.link}
              key={portfolio.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={portfolio.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {portfolio.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {portfolio.title}
                  </h1>
                  <p className="leading-relaxed">{portfolio.description}</p>
                  <div className="flex justify-center">
                <a
                  src={portfolio.link}
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Deploy
                </a>
                <a
                  src={portfolio.repo}
                  className="ml-4 inline-flex text-white bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Repo
                </a>
              </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}