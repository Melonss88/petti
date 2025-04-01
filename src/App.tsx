import Header from "@/pages/fixed/Header";
import RootRoute from "./router";
import Footer from "./pages/fixed/Footer";
import mobileStore from "@/stores/mobileStore";
import { Provider } from "mobx-react";
import { useLocation } from "react-router-dom";
import {FavoriteProvider} from '@/contexts/FavoriteContext'

const stores = {
  mobileStore
};
function App() {
  const location = useLocation();
  if(location.pathname!='/carts') {
    localStorage.setItem('step','1')
  }

  return (
    <Provider {...stores}>
      <FavoriteProvider>
        <div>
          <Header />
          <RootRoute />
          <Footer />
        </div>
      </FavoriteProvider>
    </Provider>
  );
}

export default App;
