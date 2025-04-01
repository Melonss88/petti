import { Routes, Route, useNavigate } from "react-router-dom";
import { lazy, useEffect } from "react";

const Home = lazy(() => import("@/pages/home/Index"));
const AboutUs = lazy(() => import("@/pages/aboutUs/AboutUs"));
const Hmall = lazy(() => import("@/pages/hmall/Index"))
const ProductDetail = lazy(() => import("@/pages/detail/Index"))
const Favorite = lazy(() => import("@/pages/favorite/Index"))
const Login = lazy(() => import("@/pages/login/Index"))
const Register = lazy(() => import("@/pages/register/Index"))
const Carts = lazy(() => import("@/pages/carts/Index"))

function RootRoute(): JSX.Element {
  const navigate = useNavigate();
  useEffect(() => {
  }, [navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/hmall' element={<Hmall />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/carts" element={<Carts />} />
      </Routes>
    </>
  );
}
export default RootRoute;
