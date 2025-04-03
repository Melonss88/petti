import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useAuth } from "@/contexts/AuthContext";

const Home = lazy(() => import("@/pages/home/Index"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const Hmall = lazy(() => import("@/pages/hmall/Index"));
const ProductDetail = lazy(() => import("@/pages/detail/Index"));
const Favorite = lazy(() => import("@/pages/favorite/Index"));
const Login = lazy(() => import("@/pages/user/Login"));
const Register = lazy(() => import("@/pages/user/Register"));
const Carts = lazy(() => import("@/pages/carts/Index"));
const Auth = lazy(() => import("@/pages/user/Index"));

const Loading = () => <div>Loading...</div>;

// 需要登录的路由保护
const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

// 已登录时重定向
const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || "/auth"} replace />;
  }
  return children;
};

function RootRoute(): JSX.Element {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/hmall" element={<Hmall />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorite />} />
        
         {/* 已登录时不能访问的路由 */}
         <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />
        
        {/* 需要登录的路由 */}
        <Route path="/carts" element={<AuthRoute><Carts /></AuthRoute>} />
        <Route path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />

      </Routes>
    </Suspense>
  );
}

export default RootRoute;