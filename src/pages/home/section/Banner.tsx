// import TextWelcome from "../components/TextWelcome";
import BannerCard from "../components/BannerCard";
import bannerInfos from "../config/bannerConfig";
import { useEffect, useState } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const itemHeight = window.innerHeight;
    const index = Math.round(scrollTop / itemHeight);
    setCurrentIndex(index);
  };

  return (
    <section className="relative bg-white">
      {/* <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
        <TextWelcome />
      </div> */}

      <div
        onScroll={handleScroll}
        className="overflow-y-scroll scroll-smooth snap-y snap-mandatory"
      >
        {bannerInfos.map((item, index) => (
          <div key={index} className="snap-start flex items-center justify-center">
            <BannerCard 
              img={item.imgURL} 
              title={item.title} 
              text={item.content} 
              bottomVal={item.bottomVal}
              link={item.link}
              />
          </div>
        ))}
      </div>

      {/* 右侧圆点导航 */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {bannerInfos.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex ? "w-2 h-8 bg-black" : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
