import { Link } from "react-router-dom";
import { bannerType } from '../config/bannerConfig'

const BannerCard = ({
  img,
  title,
  text,
  bottomVal = '40%',
  link
}: bannerType) => {
  return (
    <div className="w-full relative">
      <div className="overflow-hidden">
        <Link to={link}>
          <img className="w-full" src={img} alt="banner.png" />
        </Link>
      </div>
      <div 
        className="absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center w-[400px]"
        style={{ bottom: bottomVal}} 
        >
        <h1 className="text-[3rem] font-[ftn55] text-[#000]">{title}</h1>
        <h3 className="text-[18px] font-[ftn35]">{text}</h3>
      </div>
    </div>
  );
};
export default BannerCard;
