import { Outlet } from "react-router-dom";
import Footer from "../shared/components/Footer/Footer";
import Header from "../shared/components/Header/Header";

const UserLayout = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="container-main">
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default UserLayout;
