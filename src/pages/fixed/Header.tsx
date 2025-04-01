import "./header.scss";
import { Link } from "react-router-dom";
import logoImg from "./images/logo.png";
import mobileStore from "@/stores/mobileStore";
import { useEffect, useState } from "react";
import { observer } from "mobx-react";
import List from '@/pages/home/section/List'

const Header = () => {
  const [showList, setShowList] = useState(false);
  const [openList, setOpenList] = useState(false)

  useEffect(() => {
    const updateMobileState = () => {
      mobileStore.updateIsMobile();
      if (document.documentElement.clientWidth < 970) {
        setShowList(false);
      } else {
        setShowList(true);
      }
    };

    updateMobileState();
    window.addEventListener("resize", updateMobileState);

    return () => {
      window.removeEventListener("resize", updateMobileState);
    };
  }, []);

  return (
    <section className="header-container text-[2.4rem] fixed top-0 left-0 right-0 z-[2000] text-black bg-[#fff]">
      <div className="h-[84px] w-default nav-conatiner relative">
        <div className="flex justify-between items-center h-full">
          <ul className="flex text-[16px] text-[#333]">
            <li 
              className="flex items-center cursor-pointer"
              onClick={() => setOpenList(true)}
              >
              <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                <path fill="currentColor" fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>
              目录
            </li>
            <li className="flex items-center cursor-pointer">
              <svg 
                className="mr-[10px] ml-[32px]" 
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path fill="currentColor" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0"/>
              </svg>
              搜索
            </li>
          </ul>

          <div className="flex h-r-box">
            <Link className="h-r" to='/favorites'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                <path fill="currentColor" d="m8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385c.92 1.815 2.834 3.989 6.286 6.357c3.452-2.368 5.365-4.542 6.286-6.357c.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
              </svg>
            </Link>
            <Link className="h-r" to='/login'>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 16 16">
                <path fill="currentColor" d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
              </svg>
            </Link>
            <Link className="h-r" to='/carts'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
                <path fill="currentColor" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link to="/">
            <img src={logoImg} className="h-[32px]" alt="metanebula.png" />
          </Link>
        </div>
      </div>

      <List 
        isOpen={openList}
        setOpen={setOpenList}
        />
    </section>
  );
};

export default observer(Header);
