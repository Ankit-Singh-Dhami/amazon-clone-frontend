import Footer from "../components/Footer/Footer.jsx";
import Footer2 from "../components/Footer/Footer2.jsx";
import MainImage from "../components/Main/MainImage.jsx";
import Item1 from "../components/Main/Item1.jsx";
import Nav2 from "../components/NavBar/Nav2.jsx";
import Navbar from "../components/NavBar/Navbar.jsx";
import HostDashboard from "../components/Main/HostDashboard.jsx";

const Home = () => {
  const userData = localStorage.getItem("amazonUser");
  const user = userData ? JSON.parse(userData) : null;
  const role = user ? user.role : null;

  return (
    <>
      <Navbar />
      {role === "host" ? (
        <HostDashboard />
      ) : (
        <>
          <Nav2 />
          <MainImage />
          <Item1 />
          <AddItems />
        </>
      )}
      <Footer />
      <Footer2 />
    </>
  );

  return (
    <>
      <Navbar />
      {role === "host" ? (
        <HostDashboard />
      ) : (
        <>
          <Nav2 />
          <MainImage />
          <Item1 />
        </>
      )}

      <Footer />
      <Footer2 />
    </>
  );
};

export default Home;
