import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Card, Button } from "antd";
import VIPIMG from "./img/vip.jpg";
import Barcode from "react-barcode";
import { accountFormat } from "@/utils/accountFormat";

const Auth = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("memberCode");
  const userPhone = accountFormat(user?.phone);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const navItems = [
    {
      key: "memberCode",
      label: "会员码",
      icon: (
        <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      key: "address",
      label: "地址簿",
      icon: (
        <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      key: "profile",
      label: "会员信息",
      icon: (
        <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 11C14.2091 11 15 9.20914 15 7C15 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="petti-auth to-top min-h-screen">
      <div className="flex w-default mx-auto py-6">
        {/* 左侧导航栏 */}
        <aside className="w-1/4 pr-6">
          <Card className="mb-4 flex flex-col items-center">
            <img className="rounded-full h-[60px] w-[60px]" src={VIPIMG} alt="vip.jpg" />
            <p className="font-medium">{userPhone}</p>
          </Card>

          <Card>
            <nav className="Auth-nav">
              {navItems.map(({ key, label, icon  }) => (
                <div
                  key={key}
                  className={`py-3 px-4 cursor-pointer ${activeTab === key ? "bg-blue-50 text-blue-600" : ""}`}
                  onClick={() => setActiveTab(key)}
                >
                  {icon}
                  {label}
                </div>
              ))}
            </nav>

            <div className="px-4 py-6 border-t">
            <Button 
                type="text" 
                danger 
                block 
                onClick={handleLogout} 
                className="flex items-center text-left"
              >
                <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17L21 12L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                退出登录
              </Button>
            </div>
          </Card>
        </aside>

        {/* 右侧内容区域 */}
        <main className="w-3/4">
          {activeTab === "memberCode" && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">会员码</h2>
              <p className="text-gray-600 mb-6">线下店铺购买时，请出示您的会员码。</p>
              <div className="text-center py-8 border border-dashed rounded-lg">
                <div className="text-4xl font-mono tracking-widest mb-6">{userPhone}</div>
                <Barcode value={userPhone} format="CODE128" displayValue={false} height={60} width={2} />
              </div>
            </Card>
          )}

          {activeTab === "address" && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">地址簿</h2>
              <p className="text-gray-500">地址管理功能正在开发中...</p>
            </Card>
          )}

          {activeTab === "profile" && (
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-6">会员信息</h2>
              <div className="space-y-4">
                <div className="flex"><span className="w-[100px] text-gray-500">手机号：</span>{userPhone}</div>
                <div className="flex"><span className="w-[100px] text-gray-500">注册时间：</span>2025-01-01</div>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Auth;
