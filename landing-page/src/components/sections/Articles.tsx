

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../../node_modules/swiper/swiper.css";
import { scamArticles } from "@/constants";
import placeHolder from "@/assets/img/placehoder-img.jpeg"

export {
  placeHolder
}

const Articles: React.FC = () => {
  return (
    <div className="pt-24 tw-container">
      <div className=" px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8">Latest Articles on Scam Awareness</h2> */}
        <div className="flex flex-col w-full">
          {/* Featured Article */}
          {scamArticles.length > 0 && (
            <div className="lg:col-span-2 md:flex-nowrap flex-wrap flex p-6 gap-4 bg-white rounded-lg overflow-hidden">
              <img
                src={scamArticles[0].imageUrl}
                alt={scamArticles[0].title}
                className="max-w-[300px] w-full bg-slate-200 rounded-xl h-full object-cover"
              />
              <div className="md:p-6">
                <span className="text-sm bg-tw_primary tw-font-medium px-4 py-1 text-white rounded-full">Featured</span>
                <h3 className="text-2xl tw-font-bold my-4">{scamArticles[0].title}</h3>
                <p className="text-gray-600 tw-font-regular mb-4">{scamArticles[0].content.substring(0, 250)}...</p>
                <div className="flex items-center tw-font-medium text-gray-500 text-sm">
                <img 
                    src={scamArticles[0].aurthurImg || placeHolder} 
                    className="w-8 h-8 rounded-full mr-2 object-cover" 
                    alt={scamArticles[0].author} 
                  />
                  <span className="mr-2">By {scamArticles[0].author}</span>
                  <span>&middot; {new Date(scamArticles[0].date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          )}

          {/* Swiper for Smaller Articles */}
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1.8 },
              1024: { slidesPerView: 2.4 },
            }}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {scamArticles.slice(1).map((article) => (
              <SwiperSlide key={article.id} className="h-full py-16">
                <div className="bg-white flex rounded-lg overflow-hidden h-auto p-5">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    
                    className=" ds:w-28 ds:h-32 sm:w-44 sm:h-48 rounded-lg object-cover"
                  />
                  <div className="p-4 flex flex-col gap-4 justify-between">
                    <div>
                      <span className="text-xs tw-font-medium px-4 py-1 rounded-full   bg-tw_primary text-white">{article.category}</span>
                      <h3 className="sm:text-lg text-base tw-font-medium my-1">{article.title}</h3>
                      {/* <p className="text-gray-600 text-sm mb-3">{article.content.substring(0, 100)}...</p> */}
                    </div>
                    <div className="flex items-center text-gray-500  ds:text-xs sm:text-sm tw-font-medium">
                    <img src={article.aurthurImg} className="w-6 h-6 rounded-full mr-2 object-cover" alt="" />
                      <span className="mr-2 text-nowrap">By {article.author}</span>
                      <span> {new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Articles;
