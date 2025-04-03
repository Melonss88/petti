import Header from "@/pages/fixed/Header";
import RootRoute from "./router";
import Footer from "./pages/fixed/Footer";
import { useLocation } from "react-router-dom";
import {FavoriteProvider} from '@/contexts/FavoriteContext'
import { AuthProvider } from "@/contexts/AuthContext";

function App() {
  const location = useLocation();
  if(location.pathname!='/carts') {
    localStorage.setItem('step','1')
  }

  return (
    <AuthProvider>
      <FavoriteProvider>
        <div>
          <Header />
          <RootRoute />
          <Footer />
        </div>
      </FavoriteProvider>
    </AuthProvider>
  );
}

export default App;
