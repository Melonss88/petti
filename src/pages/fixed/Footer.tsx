import { Link } from "react-router-dom";
import logo from "@/pages/fixed/images/logo.png";

const logoPart = {
  string: "2025 | PETTI",
  img: logo
};
const footerConfig = [
  {
    title: "PETTI的世界",
    cont: ["简介", "新闻"],
    link: ["/nft/intro", "/"]
  },
  {
    title: "社区",
    cont: ["推特", "电报"],
    link: ["https://x.com/chydmelon", "https://t.me/guaguaai"]
  },
  {
    title: "关于",
    cont: ["关于我们"],
    link: ["/about"]
  },
  {
    title: "联系我们",
    cont: ["petti888@163.com"],
    link: ["/", "/"]
  }
];

const Footer = () => {
  return (
    <div className="bg-white text-[24px] mt-[6rem] border-t-[1px] border-[#e1e1e1] border-solid">
      <div className="w-default pt-[24px] pb-[55px]">
        <ul className="footer-ul flex text-[18px]">
          {footerConfig.map((item, index) => (
            <li key={index} className="flex-1 min-w-[128px]">
              <p className="text-[20px] font-[500] font-[ftnB]">{item.title}</p>
              {item.cont.map((item2, index2) => (
                <p key={"cont" + index2}>
                  <Link to={item.link[index2]}>{item2}</Link>
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
