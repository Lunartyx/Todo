import { Outlet, useLocation } from "react-router-dom";

import Header from './components/Header'
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        {location.pathname !== '/' && <Footer />}
      </div>
    </>
  )
}

export default App
